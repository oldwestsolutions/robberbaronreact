import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaWallet, FaBell, FaCog, FaUser, FaSearch, FaStar, FaCaretUp, FaCaretDown, FaSync, FaDollarSign, FaPercent } from 'react-icons/fa';
import './TradeStation.css';

const TradeStation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('chart');
  const [optionType, setOptionType] = useState('call');
  const [expiryDate, setExpiryDate] = useState('');
  const [activeAccount, setActiveAccount] = useState('all');
  const [timeFrame, setTimeFrame] = useState('1D');
  const [showDollars, setShowDollars] = useState(true);

  const handleLogout = () => {
    navigate('/');
  };

  // Generate next few Fridays for options expiry
  const getExpiryDates = () => {
    const dates = [];
    let current = new Date();
    for(let i = 0; i < 8; i++) {
      while(current.getDay() !== 5) { // Find next Friday
        current.setDate(current.getDate() + 1);
      }
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  return (
    <div className="tradestation-container">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <div className="dashboard-logo">RobberBaron.ai</div>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search markets..." />
          </div>
        </div>
        <div className="nav-controls">
          <button className="nav-button">
            <FaBell />
            <span className="notification-badge">3</span>
          </button>
          <button className="nav-button">
            <FaWallet /> $100,000.00
          </button>
          <button className="nav-button">
            <FaUser />
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-layout">
        <aside className="market-sidebar">
          <h3>Volume Leaders</h3>
          <div className="volume-list">
            <div className="volume-item">
              <div className="volume-info">
                <span className="volume-name">TSLA</span>
                <span className="volume-price">$242.68</span>
              </div>
              <div className="volume-stats">
                <span className="volume-amount">125.4M</span>
                <span className="change negative">-1.23%</span>
              </div>
            </div>
            <div className="volume-item">
              <div className="volume-info">
                <span className="volume-name">AAPL</span>
                <span className="volume-price">$175.34</span>
              </div>
              <div className="volume-stats">
                <span className="volume-amount">98.2M</span>
                <span className="change positive">+2.45%</span>
              </div>
            </div>
            <div className="volume-item">
              <div className="volume-info">
                <span className="volume-name">AMD</span>
                <span className="volume-price">$123.45</span>
              </div>
              <div className="volume-stats">
                <span className="volume-amount">85.7M</span>
                <span className="change positive">+3.67%</span>
              </div>
            </div>
          </div>

          <h3>Options Volume</h3>
          <div className="options-volume">
            <div className="volume-item">
              <div className="volume-info">
                <span className="volume-name">TSLA 250c</span>
                <span className="volume-price">$5.45</span>
              </div>
              <div className="volume-stats">
                <span className="volume-amount">234.5K</span>
                <span className="iv">IV: 65%</span>
              </div>
            </div>
            <div className="volume-item">
              <div className="volume-info">
                <span className="volume-name">SPY 440p</span>
                <span className="volume-price">$3.22</span>
              </div>
              <div className="volume-stats">
                <span className="volume-amount">156.3K</span>
                <span className="iv">IV: 45%</span>
              </div>
            </div>
          </div>
        </aside>

        <section className="chart-section">
          <div className="content-header">
            <div className="symbol-info">
              <h1>AAPL</h1>
              <div className="price-info">
                <span className="current-price">$175.34</span>
                <span className="price-change positive">
                  <FaCaretUp /> +4.23 (+2.45%)
                </span>
              </div>
            </div>
            <div className="trading-controls">
              <button className="trade-btn buy">Buy</button>
              <button className="trade-btn sell">Sell</button>
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-header">
              <div className="chart-tabs">
                <button className="tab-btn active">Chart</button>
                <button className="tab-btn">Depth</button>
                <button className="tab-btn">Trades</button>
              </div>
              <div className="chart-controls">
                <select className="timeframe-select">
                  <option>1m</option>
                  <option>5m</option>
                  <option>15m</option>
                  <option>1h</option>
                  <option>4h</option>
                  <option>1d</option>
                </select>
                <button className="indicator-btn">
                  <FaChartLine /> Add Indicator
                </button>
              </div>
            </div>
            <div className="chart-area">
              Chart Component Will Go Here
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <div className="content-header">
            <div className="account-tabs">
              <button 
                className={`account-tab ${activeAccount === 'all' ? 'active' : ''}`}
                onClick={() => setActiveAccount('all')}
              >
                All Accounts
              </button>
              <button 
                className={`account-tab ${activeAccount === 'trading' ? 'active' : ''}`}
                onClick={() => setActiveAccount('trading')}
              >
                Trading
              </button>
              <button 
                className={`account-tab ${activeAccount === 'crypto' ? 'active' : ''}`}
                onClick={() => setActiveAccount('crypto')}
              >
                Crypto
              </button>
            </div>
          </div>

          <div className="portfolio-container">
            <div className="portfolio-header">
              <div className="portfolio-value-section">
                <div className="value-toggle">
                  <button 
                    className={`toggle-btn ${showDollars ? 'active' : ''}`}
                    onClick={() => setShowDollars(true)}
                  >
                    <FaDollarSign />
                  </button>
                  <button 
                    className={`toggle-btn ${!showDollars ? 'active' : ''}`}
                    onClick={() => setShowDollars(false)}
                  >
                    <FaPercent />
                  </button>
                </div>
                <h2 className="portfolio-amount">
                  {showDollars ? '$125,432.67' : '+23.45%'}
                </h2>
                <div className="portfolio-change positive">
                  <FaCaretUp />
                  <span>
                    {showDollars ? '+$2,345.67' : '+1.89%'} Today
                  </span>
                </div>
              </div>
            </div>

            <div className="portfolio-chart-container">
              <div className="chart-area">
                <div className="chart-placeholder">
                  Interactive Chart Area
                </div>
                <div className="chart-hover-info">
                  <span className="hover-date">Apr 15, 2024</span>
                  <span className="hover-value">$125,432.67</span>
                  <span className="hover-change positive">+$2,345.67 (+1.89%)</span>
                </div>
              </div>
              
              <div className="time-frame-selector">
                {['1D', '1W', '1M', '3M', '1Y', 'ALL'].map((frame) => (
                  <button
                    key={frame}
                    className={`time-btn ${timeFrame === frame ? 'active' : ''}`}
                    onClick={() => setTimeFrame(frame)}
                  >
                    {frame}
                  </button>
                ))}
              </div>
            </div>

            <div className="portfolio-metrics">
              <div className="metric-card">
                <span className="metric-label">Buying Power</span>
                <span className="metric-value">$45,678.90</span>
              </div>
              <div className="metric-card">
                <span className="metric-label">Cash Balance</span>
                <span className="metric-value">$23,456.78</span>
              </div>
              <div className="metric-card">
                <span className="metric-label">Margin Used</span>
                <span className="metric-value">$12,345.67</span>
              </div>
            </div>

            <div className="holdings-list">
              <h3>Current Holdings</h3>
              <div className="holding-item">
                <div className="holding-header">
                  <span className="holding-symbol">AAPL</span>
                  <span className="holding-shares">100 shares</span>
                </div>
                <div className="holding-details">
                  <div className="detail-column">
                    <span className="detail-label">Market Value</span>
                    <span className="detail-value">$17,534.00</span>
                  </div>
                  <div className="detail-column">
                    <span className="detail-label">Avg Cost</span>
                    <span className="detail-value">$165.45</span>
                  </div>
                  <div className="detail-column">
                    <span className="detail-label">Total Return</span>
                    <span className="detail-value positive">+$989.00</span>
                  </div>
                </div>
              </div>

              <div className="holding-item">
                <div className="holding-header">
                  <span className="holding-symbol">TSLA</span>
                  <span className="holding-shares">50 shares</span>
                </div>
                <div className="holding-details">
                  <div className="detail-column">
                    <span className="detail-label">Market Value</span>
                    <span className="detail-value">$12,134.00</span>
                  </div>
                  <div className="detail-column">
                    <span className="detail-label">Avg Cost</span>
                    <span className="detail-value">$234.56</span>
                  </div>
                  <div className="detail-column">
                    <span className="detail-label">Total Return</span>
                    <span className="detail-value negative">-$456.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="trading-sidebar">
          <div className="trading-form">
            <h3>Options Trade</h3>
            <div className="form-tabs">
              <button 
                className={`form-tab ${optionType === 'call' ? 'active' : ''}`}
                onClick={() => setOptionType('call')}
              >
                Call
              </button>
              <button 
                className={`form-tab ${optionType === 'put' ? 'active' : ''}`}
                onClick={() => setOptionType('put')}
              >
                Put
              </button>
            </div>
            <div className="form-content">
              <div className="form-group">
                <label>Expiration Date</label>
                <select 
                  value={expiryDate} 
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="expiry-select"
                >
                  <option value="">Select Expiry</option>
                  {getExpiryDates().map(date => (
                    <option key={date.toISOString()} value={date.toISOString()}>
                      {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Strike Price</label>
                <input type="number" step="0.5" placeholder="Enter strike price" />
              </div>

              <div className="form-group">
                <label>Contracts</label>
                <input type="number" min="1" placeholder="Number of contracts" />
              </div>

              <div className="options-info">
                <div className="info-row">
                  <span>Bid</span>
                  <span>$4.25</span>
                </div>
                <div className="info-row">
                  <span>Ask</span>
                  <span>$4.35</span>
                </div>
                <div className="info-row">
                  <span>IV</span>
                  <span>45.67%</span>
                </div>
                <div className="info-row">
                  <span>Delta</span>
                  <span>0.65</span>
                </div>
                <div className="info-row">
                  <span>Theta</span>
                  <span>-0.045</span>
                </div>
                <div className="info-row">
                  <span>Gamma</span>
                  <span>0.023</span>
                </div>
              </div>

              <div className="order-summary">
                <div className="summary-row">
                  <span>Premium/Contract:</span>
                  <span>$435.00</span>
                </div>
                <div className="summary-row">
                  <span>Total Cost:</span>
                  <span>$4,350.00</span>
                </div>
                <div className="summary-row">
                  <span>Max Loss:</span>
                  <span>$4,350.00</span>
                </div>
                <div className="summary-row">
                  <span>Break Even:</span>
                  <span>$244.35</span>
                </div>
              </div>

              <button className={`submit-btn ${optionType === 'call' ? 'buy' : 'sell'}`}>
                Place {optionType.toUpperCase()} Order
              </button>
            </div>
          </div>

          <div className="active-options">
            <h3>Active Options</h3>
            <div className="options-list">
              <div className="option-item">
                <div className="option-header">
                  <span className="option-type call">AAPL 180c</span>
                  <span className="option-exp">Jun 21</span>
                </div>
                <div className="option-details">
                  <div className="detail-row">
                    <span>Qty: 10</span>
                    <span>Avg: $4.25</span>
                  </div>
                  <div className="detail-row">
                    <span>P/L: +$850</span>
                    <span className="positive">+20%</span>
                  </div>
                </div>
              </div>
              <div className="option-item">
                <div className="option-header">
                  <span className="option-type put">SPY 430p</span>
                  <span className="option-exp">May 17</span>
                </div>
                <div className="option-details">
                  <div className="detail-row">
                    <span>Qty: 5</span>
                    <span>Avg: $3.15</span>
                  </div>
                  <div className="detail-row">
                    <span>P/L: -$325</span>
                    <span className="negative">-12%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TradeStation; 