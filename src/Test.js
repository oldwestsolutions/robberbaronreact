import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div>Home <Link to="/about">About</Link></div>;
const About = () => <div>About <Link to="/">Home</Link></div>;

function Test() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default Test; 