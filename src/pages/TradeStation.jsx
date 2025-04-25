import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaWallet, FaUser, FaStar, FaChartLine, FaCaretUp, FaCaretDown, FaInfoCircle, FaNewspaper, FaUsers, FaGlobe, FaHistory } from 'react-icons/fa';
import './TradeStation.css';

const TradeStation = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for top companies
  const topCompanies = [
    { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 175.34, change: 4.23, changePercent: 2.45, volume: '65.3M', marketCap: '2.89T', pe: 28.97, dividend: 0.82, description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.' },
    { id: 2, symbol: 'MSFT', name: 'Microsoft Corporation', price: 327.89, change: 2.54, changePercent: 0.78, volume: '22.1M', marketCap: '2.45T', pe: 35.12, dividend: 0.95, description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.' },
    { id: 3, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 132.67, change: -1.25, changePercent: -0.93, volume: '18.7M', marketCap: '1.67T', pe: 25.34, dividend: 0, description: 'Alphabet Inc. provides various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.' },
    { id: 4, symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 129.45, change: 3.78, changePercent: 3.01, volume: '41.2M', marketCap: '1.34T', pe: 61.87, dividend: 0, description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally.' },
    { id: 5, symbol: 'TSLA', name: 'Tesla, Inc.', price: 242.56, change: -5.67, changePercent: -2.29, volume: '132.5M', marketCap: '769.42B', pe: 49.52, dividend: 0, description: 'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems.' },
  ];

  // Recent news for companies (mock data)
  const companyNews = [
    { id: 1, company: 'AAPL', title: 'Apple Reports Record Q2 Earnings', date: '2023-05-01', source: 'Financial Times' },
    { id: 2, company: 'AAPL', title: 'New iPhone 15 Rumored to Feature Major Camera Upgrade', date: '2023-04-28', source: 'Tech Insider' },
    { id: 3, company: 'MSFT', title: 'Microsoft Cloud Services See 31% Growth', date: '2023-05-02', source: 'Wall Street Journal' },
    { id: 4, company: 'GOOGL', title: 'Google Unveils New AI Advancements at Annual Conference', date: '2023-04-30', source: 'CNBC' },
    { id: 5, company: 'AMZN', title: 'Amazon Prime Day Set for July 11-12', date: '2023-05-03', source: 'Reuters' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const foundCompany = topCompanies.find(
      company => company.symbol.toLowerCase() === searchQuery.toLowerCase() || 
                company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (foundCompany) {
      setSelectedCompany(foundCompany);
      setActiveTab('overview');
    }
  };

  // Filter news for the selected company
  const getCompanyNews = (symbol) => {
    return companyNews.filter(news => news.company === symbol);
  };

  return (
    <div className="tradestation-container">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <div className="dashboard-logo">RobberBaron.ai</div>
          <form onSubmit={handleSearch} className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for companies (e.g., AAPL, Microsoft)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
          </form>
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

      <div className="main-content-wrapper">
        <div className="account-dashboard">
          {/* Top Companies Section */}
          <section className="top-companies-section">
            <h2>Top Companies</h2>
            <div className="company-list">
              {topCompanies.map(company => (
                <div 
                  key={company.id} 
                  className={`company-card ${selectedCompany?.symbol === company.symbol ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedCompany(company);
                    setActiveTab('overview');
                  }}
                >
                  <div className="company-header">
                    <div className="company-symbol">{company.symbol}</div>
                    <div className="company-name">{company.name}</div>
                  </div>
                  <div className="company-price">${company.price.toFixed(2)}</div>
                  <div className={`company-change ${company.change >= 0 ? 'positive' : 'negative'}`}>
                    {company.change >= 0 ? <FaCaretUp /> : <FaCaretDown />}
                    {company.change.toFixed(2)} ({company.changePercent.toFixed(2)}%)
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company Profile Section */}
          {selectedCompany && (
            <section className="company-profile-section">
              <div className="profile-header">
                <div className="company-title">
                  <h1>{selectedCompany.symbol}</h1>
                  <h2>{selectedCompany.name}</h2>
                </div>
                <div className="company-price-large">
                  <div className="current-price">${selectedCompany.price.toFixed(2)}</div>
                  <div className={`price-change ${selectedCompany.change >= 0 ? 'positive' : 'negative'}`}>
                    {selectedCompany.change >= 0 ? <FaCaretUp /> : <FaCaretDown />}
                    {selectedCompany.change.toFixed(2)} ({selectedCompany.changePercent.toFixed(2)}%)
                  </div>
                </div>
                <button className="add-to-watchlist"><FaStar /> Add to Watchlist</button>
              </div>

              <div className="profile-tabs">
                <button 
                  className={`profile-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <FaInfoCircle /> Overview
                </button>
                <button 
                  className={`profile-tab ${activeTab === 'news' ? 'active' : ''}`}
                  onClick={() => setActiveTab('news')}
                >
                  <FaNewspaper /> News
                </button>
                <button 
                  className={`profile-tab ${activeTab === 'financials' ? 'active' : ''}`}
                  onClick={() => setActiveTab('financials')}
                >
                  <FaChartLine /> Financials
                </button>
                <button 
                  className={`profile-tab ${activeTab === 'social' ? 'active' : ''}`}
                  onClick={() => setActiveTab('social')}
                >
                  <FaUsers /> Social Sentiment
                </button>
              </div>

              <div className="profile-content">
                {activeTab === 'overview' && (
                  <div className="overview-tab">
                    <div className="company-description">
                      <h3>About {selectedCompany.name}</h3>
                      <p>{selectedCompany.description}</p>
                    </div>
                    
                    <div className="key-stats">
                      <h3>Key Statistics</h3>
                      <div className="stats-grid">
                        <div className="stat-item">
                          <span className="stat-label">Market Cap</span>
                          <span className="stat-value">{selectedCompany.marketCap}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">P/E Ratio</span>
                          <span className="stat-value">{selectedCompany.pe}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Volume</span>
                          <span className="stat-value">{selectedCompany.volume}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Dividend Yield</span>
                          <span className="stat-value">{selectedCompany.dividend}%</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">52-Week High</span>
                          <span className="stat-value">${(selectedCompany.price * 1.2).toFixed(2)}</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">52-Week Low</span>
                          <span className="stat-value">${(selectedCompany.price * 0.8).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="trading-actions">
                      <button className="action-btn buy">Buy {selectedCompany.symbol}</button>
                      <button className="action-btn sell">Sell {selectedCompany.symbol}</button>
                      <button className="action-btn options">Options Chain</button>
                    </div>
                  </div>
                )}

                {activeTab === 'news' && (
                  <div className="news-tab">
                    <h3>Latest News for {selectedCompany.symbol}</h3>
                    <div className="news-list">
                      {getCompanyNews(selectedCompany.symbol).length > 0 ? (
                        getCompanyNews(selectedCompany.symbol).map(newsItem => (
                          <div key={newsItem.id} className="news-item">
                            <h4>{newsItem.title}</h4>
                            <div className="news-meta">
                              <span className="news-source">{newsItem.source}</span>
                              <span className="news-date">{newsItem.date}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No recent news available for {selectedCompany.symbol}</p>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'financials' && (
                  <div className="financials-tab">
                    <h3>Financial Performance</h3>
                    <p>Quarterly and annual financial data will be displayed here.</p>
                    <div className="financial-placeholder">
                      Financial charts and metrics coming soon
                    </div>
                  </div>
                )}

                {activeTab === 'social' && (
                  <div className="social-tab">
                    <h3>Social Media Sentiment</h3>
                    <div className="sentiment-score">
                      <div className="score-label">Overall Sentiment</div>
                      <div className="score-value positive">78/100</div>
                    </div>
                    <div className="sentiment-breakdown">
                      <h4>Sentiment Sources</h4>
                      <div className="source-item">
                        <span>Twitter</span>
                        <div className="sentiment-bar positive" style={{width: '65%'}}>65%</div>
                      </div>
                      <div className="source-item">
                        <span>Reddit</span>
                        <div className="sentiment-bar positive" style={{width: '82%'}}>82%</div>
                      </div>
                      <div className="source-item">
                        <span>Financial News</span>
                        <div className="sentiment-bar positive" style={{width: '73%'}}>73%</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Account Summary Section */}
          <section className="account-summary-section">
            <h2>Your Account Summary</h2>
            <div className="account-metrics">
              <div className="metric-card">
                <span className="metric-label">Total Portfolio Value</span>
                <span className="metric-value">$145,892.43</span>
                <span className="metric-change positive">+$2,341.22 (1.63%)</span>
              </div>
              <div className="metric-card">
                <span className="metric-label">Cash Balance</span>
                <span className="metric-value">$23,456.78</span>
              </div>
              <div className="metric-card">
                <span className="metric-label">Invested Value</span>
                <span className="metric-value">$122,435.65</span>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <FaHistory className="activity-icon" />
                  <div className="activity-details">
                    <div className="activity-title">Bought AAPL</div>
                    <div className="activity-meta">20 shares at $175.34</div>
                  </div>
                  <div className="activity-time">2 hours ago</div>
                </div>
                <div className="activity-item">
                  <FaHistory className="activity-icon" />
                  <div className="activity-details">
                    <div className="activity-title">Sold TSLA</div>
                    <div className="activity-meta">5 shares at $242.56</div>
                  </div>
                  <div className="activity-time">Yesterday</div>
                </div>
                <div className="activity-item">
                  <FaHistory className="activity-icon" />
                  <div className="activity-details">
                    <div className="activity-title">Dividend Received</div>
                    <div className="activity-meta">MSFT quarterly dividend</div>
                  </div>
                  <div className="activity-time">May 1, 2023</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TradeStation; 