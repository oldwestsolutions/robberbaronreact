import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import TradeStation from './pages/TradeStation';
import MachineLearning from './pages/MachineLearning';
import University from './pages/University';
import RobberBarons from './pages/RobberBarons';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tradestation" element={<TradeStation />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/university" element={<University />} />
        <Route path="/robber-barons" element={<RobberBarons />} />
      </Routes>
    </div>
  );
}

export default App; 