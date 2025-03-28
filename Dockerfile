# Build stage
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:16-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/server.js .
COPY package*.json ./
RUN npm install --only=production
EXPOSE 8080
CMD ["node", "server.js"] 