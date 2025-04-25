import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaWallet, FaUser, FaStar, FaChartLine, FaCaretUp, FaCaretDown, 
         FaPlusCircle, FaEllipsisH, FaRegListAlt, FaPlus, FaChartBar, FaRegChartBar, 
         FaGlobe, FaRegNewspaper, FaArrowRight, FaPen, FaRegStar } from 'react-icons/fa';
import './TradeStation.css';

const TradeStation = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('markets');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [activeWatchlist, setActiveWatchlist] = useState('default');

  // Mock data for recommended funds
  const recommendedFunds = [
    { id: 1, symbol: 'SPY', name: 'SPDR S&P 500 ETF Trust', price: 463.84, change: 5.23, changePercent: 1.14, type: 'ETF', aum: '395.8B', expense: 0.09 },
    { id: 2, symbol: 'QQQ', name: 'Invesco QQQ Trust', price: 376.78, change: 7.31, changePercent: 1.98, type: 'ETF', aum: '189.5B', expense: 0.20 },
    { id: 3, symbol: 'VFIAX', name: 'Vanguard 500 Index Fund', price: 463.24, change: 5.15, changePercent: 1.12, type: 'Mutual Fund', aum: '845.2B', expense: 0.04 },
    { id: 4, symbol: 'VTSAX', name: 'Vanguard Total Stock Market Index', price: 112.04, change: 1.25, changePercent: 1.13, type: 'Mutual Fund', aum: '1.3T', expense: 0.04 },
    { id: 5, symbol: 'FXAIX', name: 'Fidelity 500 Index Fund', price: 166.87, change: 1.86, changePercent: 1.13, type: 'Mutual Fund', aum: '398.6B', expense: 0.015 },
  ];

  // Mock data for stocks
  const stocks = [
    { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 175.34, change: 4.23, changePercent: 2.45, type: 'Stock' },
    { id: 2, symbol: 'MSFT', name: 'Microsoft Corporation', price: 327.89, change: 2.54, changePercent: 0.78, type: 'Stock' },
    { id: 3, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 132.67, change: -1.25, changePercent: -0.93, type: 'Stock' },
    { id: 4, symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 129.45, change: 3.78, changePercent: 3.01, type: 'Stock' },
    { id: 5, symbol: 'TSLA', name: 'Tesla, Inc.', price: 242.56, change: -5.67, changePercent: -2.29, type: 'Stock' },
    { id: 6, symbol: 'META', name: 'Meta Platforms, Inc.', price: 316.29, change: 4.83, changePercent: 1.55, type: 'Stock' },
    { id: 7, symbol: 'NVDA', name: 'NVIDIA Corporation', price: 467.65, change: 15.32, changePercent: 3.39, type: 'Stock' },
    { id: 8, symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 187.92, change: -2.18, changePercent: -1.15, type: 'Stock' },
  ];

  // Mock data for watchlists
  const [watchlists, setWatchlists] = useState([
    { id: 'default', name: 'My First List', assets: ['AAPL', 'MSFT', 'GOOGL', 'AMZN'] },
    { id: 'tech', name: 'Tech Stocks', assets: ['AAPL', 'MSFT', 'NVDA', 'GOOGL'] },
    { id: 'etfs', name: 'ETFs', assets: ['SPY', 'QQQ'] }
  ]);

  // Portfolio data (mock)
  const portfolioValue = 145892.43;
  const portfolioChange = 2341.22;
  const portfolioChangePercent = 1.63;

  const handleLogout = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const foundAsset = [...stocks, ...recommendedFunds].find(
      asset => asset.symbol.toLowerCase() === searchQuery.toLowerCase() || 
                asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (foundAsset) {
      setSelectedAsset(foundAsset);
    }
  };

  const handleAddToWatchlist = (symbol) => {
    if (!watchlists.find(w => w.id === activeWatchlist).assets.includes(symbol)) {
      setWatchlists(watchlists.map(list => 
        list.id === activeWatchlist 
          ? { ...list, assets: [...list.assets, symbol] } 
          : list
      ));
    }
  };

  const handleRemoveFromWatchlist = (symbol) => {
    setWatchlists(watchlists.map(list => 
      list.id === activeWatchlist 
        ? { ...list, assets: list.assets.filter(s => s !== symbol) } 
        : list
    ));
  };

  const handleCreateWatchlist = () => {
    const newId = `list-${watchlists.length + 1}`;
    setWatchlists([...watchlists, { id: newId, name: `Watchlist ${watchlists.length + 1}`, assets: [] }]);
    setActiveWatchlist(newId);
  };

  const getWatchlistAssets = () => {
    const currentWatchlist = watchlists.find(w => w.id === activeWatchlist);
    if (!currentWatchlist) return [];
    
    return [...stocks, ...recommendedFunds].filter(asset => 
      currentWatchlist.assets.includes(asset.symbol)
    );
  };

  const renderAssetRow = (asset, inWatchlist = false) => (
    <div key={asset.id} className="asset-row" onClick={() => setSelectedAsset(asset)}>
      <div className="asset-info">
        <div className="asset-symbol">{asset.symbol}</div>
        <div className="asset-name">{asset.name}</div>
      </div>
      <div className="asset-price-container">
        <div className="asset-price">${asset.price.toFixed(2)}</div>
        <div className={`asset-change ${asset.change >= 0 ? 'positive' : 'negative'}`}>
          {asset.change >= 0 ? <FaCaretUp /> : <FaCaretDown />}
          {asset.changePercent.toFixed(2)}%
        </div>
      </div>
      <div className="asset-actions">
        {inWatchlist ? (
          <button className="icon-button" onClick={(e) => {
            e.stopPropagation();
            handleRemoveFromWatchlist(asset.symbol);
          }}>
            <FaStar />
          </button>
        ) : (
          <button className="icon-button" onClick={(e) => {
            e.stopPropagation();
            handleAddToWatchlist(asset.symbol);
          }}>
            <FaRegStar />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="tradestation-container">
      <nav className="dashboard-nav">
        <div className="nav-left">
          <div className="dashboard-logo">RobberBaron</div>
          <form onSubmit={handleSearch} className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="nav-controls">
          <button className="nav-button">
            <FaBell />
            <span className="notification-badge">3</span>
          </button>
          <button className="nav-button">
            <FaWallet />
          </button>
          <button className="nav-button">
            <FaUser />
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="robinhood-dashboard">
        {/* Portfolio Section - Always visible at top */}
        <section className="portfolio-section">
          <div className="portfolio-value-container">
            <h3>Portfolio Value</h3>
            <div className="portfolio-value">${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className={`portfolio-change ${portfolioChange >= 0 ? 'positive' : 'negative'}`}>
              {portfolioChange >= 0 ? "+" : ""}{portfolioChange.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({portfolioChangePercent}%) Today
            </div>
          </div>
          <div className="portfolio-chart-placeholder">
            Chart will go here
          </div>
          <div className="portfolio-timeframes">
            <button className="timeframe-btn active">1D</button>
            <button className="timeframe-btn">1W</button>
            <button className="timeframe-btn">1M</button>
            <button className="timeframe-btn">3M</button>
            <button className="timeframe-btn">1Y</button>
            <button className="timeframe-btn">ALL</button>
          </div>
          <div className="cta-buttons">
            <button className="cta-button">Buy</button>
            <button className="cta-button sell">Sell</button>
          </div>
        </section>

        {/* Main Tabs */}
        <div className="dashboard-tabs">
          <button 
            className={`dashboard-tab ${selectedTab === 'markets' ? 'active' : ''}`}
            onClick={() => setSelectedTab('markets')}
          >
            <FaGlobe /> Markets
          </button>
          <button 
            className={`dashboard-tab ${selectedTab === 'lists' ? 'active' : ''}`}
            onClick={() => setSelectedTab('lists')}
          >
            <FaRegListAlt /> Lists
          </button>
          <button 
            className={`dashboard-tab ${selectedTab === 'news' ? 'active' : ''}`}
            onClick={() => setSelectedTab('news')}
          >
            <FaRegNewspaper /> News
          </button>
        </div>

        {/* Tab Content */}
        <div className="dashboard-content">
          {selectedTab === 'markets' && (
            <div className="markets-tab">
              <section className="recommended-section">
                <div className="section-header">
                  <h3>Recommended Funds</h3>
                  <button className="view-all-btn">
                    View All <FaArrowRight />
                  </button>
                </div>
                <div className="funds-grid">
                  {recommendedFunds.map(fund => (
                    <div 
                      key={fund.id} 
                      className="fund-card"
                      onClick={() => setSelectedAsset(fund)}
                    >
                      <div className="fund-header">
                        <span className="fund-symbol">{fund.symbol}</span>
                        <span className="fund-type">{fund.type}</span>
                      </div>
                      <div className="fund-price">${fund.price.toFixed(2)}</div>
                      <div className={`fund-change ${fund.change >= 0 ? 'positive' : 'negative'}`}>
                        {fund.change >= 0 ? <FaCaretUp /> : <FaCaretDown />}
                        {fund.changePercent.toFixed(2)}%
                      </div>
                      <div className="fund-info">
                        <div className="info-item">
                          <span className="info-label">AUM:</span>
                          <span className="info-value">{fund.aum}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Expense:</span>
                          <span className="info-value">{fund.expense}%</span>
                        </div>
                      </div>
                      <button className="add-to-watchlist" onClick={(e) => {
                        e.stopPropagation();
                        handleAddToWatchlist(fund.symbol);
                      }}>
                        <FaPlus /> Add to List
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="popular-section">
                <div className="section-header">
                  <h3>Popular Stocks</h3>
                  <button className="view-all-btn">
                    View All <FaArrowRight />
                  </button>
                </div>
                <div className="asset-list">
                  {stocks.slice(0, 5).map(stock => renderAssetRow(stock))}
                </div>
              </section>
            </div>
          )}

          {selectedTab === 'lists' && (
            <div className="lists-tab">
              <div className="watchlist-selector">
                <div className="watchlist-header">
                  <h3>Your Lists</h3>
                  <button className="create-list-btn" onClick={handleCreateWatchlist}>
                    <FaPlusCircle /> Create List
                  </button>
                </div>
                <div className="watchlist-tabs">
                  {watchlists.map(list => (
                    <button 
                      key={list.id}
                      className={`watchlist-tab ${activeWatchlist === list.id ? 'active' : ''}`}
                      onClick={() => setActiveWatchlist(list.id)}
                    >
                      {list.name} ({list.assets.length})
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="watchlist-content">
                <div className="watchlist-header">
                  <h3>{watchlists.find(w => w.id === activeWatchlist)?.name}</h3>
                  <button className="edit-btn">
                    <FaPen /> Edit List
                  </button>
                </div>
                
                <div className="asset-list">
                  {getWatchlistAssets().length > 0 ? (
                    getWatchlistAssets().map(asset => renderAssetRow(asset, true))
                  ) : (
                    <div className="empty-watchlist">
                      <p>No assets in this list yet.</p>
                      <p>Search for stocks, ETFs, or mutual funds to add them here.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'news' && (
            <div className="news-tab">
              <h3>Latest Market News</h3>
              <div className="news-list">
                <div className="news-item">
                  <div className="news-source">The Wall Street Journal</div>
                  <h4 className="news-title">Fed Signals Potential Rate Cuts as Inflation Eases</h4>
                  <div className="news-meta">2 hours ago</div>
                </div>
                <div className="news-item">
                  <div className="news-source">Bloomberg</div>
                  <h4 className="news-title">Tech Stocks Rally on Strong Earnings Reports</h4>
                  <div className="news-meta">4 hours ago</div>
                </div>
                <div className="news-item">
                  <div className="news-source">CNBC</div>
                  <h4 className="news-title">Market Analysis: What's Behind Today's Rally?</h4>
                  <div className="news-meta">Yesterday</div>
                </div>
                <div className="news-item">
                  <div className="news-source">Reuters</div>
                  <h4 className="news-title">Global Markets: Asian Shares Hit Record High</h4>
                  <div className="news-meta">Yesterday</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Asset Detail Modal */}
        {selectedAsset && (
          <div className="asset-detail-modal">
            <div className="modal-header">
              <div>
                <h2>{selectedAsset.symbol}</h2>
                <h3>{selectedAsset.name}</h3>
              </div>
              <button className="close-modal" onClick={() => setSelectedAsset(null)}>×</button>
            </div>
            
            <div className="asset-price-panel">
              <div className="current-price">${selectedAsset.price.toFixed(2)}</div>
              <div className={`price-change ${selectedAsset.change >= 0 ? 'positive' : 'negative'}`}>
                {selectedAsset.change >= 0 ? "+" : ""}{selectedAsset.change.toFixed(2)} ({selectedAsset.changePercent.toFixed(2)}%)
              </div>
            </div>
            
            <div className="asset-chart-placeholder">
              Asset chart will go here
            </div>
            
            <div className="asset-timeframes">
              <button className="timeframe-btn active">1D</button>
              <button className="timeframe-btn">1W</button>
              <button className="timeframe-btn">1M</button>
              <button className="timeframe-btn">3M</button>
              <button className="timeframe-btn">1Y</button>
              <button className="timeframe-btn">ALL</button>
            </div>
            
            <div className="asset-actions-panel">
              <button className="action-btn buy-btn">Buy</button>
              <button className="action-btn sell-btn">Sell</button>
              {watchlists.find(w => w.id === activeWatchlist).assets.includes(selectedAsset.symbol) ? (
                <button className="action-btn list-btn active" onClick={() => handleRemoveFromWatchlist(selectedAsset.symbol)}>
                  <FaStar /> Remove from List
                </button>
              ) : (
                <button className="action-btn list-btn" onClick={() => handleAddToWatchlist(selectedAsset.symbol)}>
                  <FaRegStar /> Add to List
                </button>
              )}
            </div>
            
            {selectedAsset.type === 'ETF' || selectedAsset.type === 'Mutual Fund' ? (
              <div className="asset-details">
                <div className="detail-row">
                  <span className="detail-label">Fund Type</span>
                  <span className="detail-value">{selectedAsset.type}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Assets Under Management</span>
                  <span className="detail-value">{selectedAsset.aum}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Expense Ratio</span>
                  <span className="detail-value">{selectedAsset.expense}%</span>
                </div>
              </div>
            ) : (
              <div className="asset-details">
                <div className="detail-row">
                  <span className="detail-label">Market Cap</span>
                  <span className="detail-value">$2.89T</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">P/E Ratio</span>
                  <span className="detail-value">28.45</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Dividend Yield</span>
                  <span className="detail-value">0.54%</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeStation; 