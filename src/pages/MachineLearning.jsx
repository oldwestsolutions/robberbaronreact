import React from 'react';
import { FaBrain, FaChartLine, FaChartBar, FaDatabase, FaNetworkWired, FaRobot, FaServer, FaCogs, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MachineLearning.css';

const MachineLearning = () => {
  return (
    <div className="ml-page-container">
      <nav className="navbar">
        <div className="logo">RobberBaron.ai</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/technicals">Technicals</Link>
          <Link to="/university">University</Link>
          <Link to="/robber-barons">Robber Barons</Link>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <header className="ml-hero">
        <div className="ml-hero-content">
          <h1>Enterprise Machine Learning Solutions</h1>
          <p>Our proprietary technologies deliver institutional-grade intelligence for traders and investors of all sizes</p>
        </div>
      </header>

      <section className="ml-overview">
        <div className="ml-overview-content">
          <h2>Algorithmic Intelligence for Modern Markets</h2>
          <p>
            RobberBaron.ai leverages cutting-edge machine learning technologies previously available only to elite hedge funds and investment banks. Our proprietary systems analyze massive datasets across global markets to identify high-probability trading opportunities with precision and reliability.
          </p>
          <p>
            Unlike conventional technical analysis or basic algorithmic systems, our machine learning platform continuously adapts to changing market conditions, ensuring sustained performance across diverse market regimes.
          </p>
        </div>
      </section>

      <section className="ml-capabilities">
        <h2>Our Intelligence Technologies</h2>
        
        <div className="ml-capability-card">
          <div className="ml-capability-header">
            <FaBrain className="ml-capability-icon" />
            <h3>Deep Neural Networks</h3>
          </div>
          <div className="ml-capability-content">
            <p>
              Our proprietary neural networks process millions of data points to detect patterns invisible to human traders or conventional algorithms. These systems identify complex market relationships across multiple timeframes and asset classes.
            </p>
            <ul>
              <li>Multi-layered convolutional neural networks for pattern recognition</li>
              <li>Recurrent neural networks for time-series analysis</li>
              <li>Custom architectures optimized for financial market data</li>
            </ul>
          </div>
        </div>

        <div className="ml-capability-card">
          <div className="ml-capability-header">
            <FaChartLine className="ml-capability-icon" />
            <h3>Predictive Analytics Engine</h3>
          </div>
          <div className="ml-capability-content">
            <p>
              Our proprietary predictive systems forecast price movements, volatility changes, and market regime shifts with unprecedented accuracy. These technologies enable traders to anticipate market movements rather than react to them.
            </p>
            <ul>
              <li>Multi-factor prediction models with confidence scoring</li>
              <li>Volatility forecasting for optimal position sizing</li>
              <li>Market regime classification for strategy optimization</li>
            </ul>
          </div>
        </div>

        <div className="ml-capability-card">
          <div className="ml-capability-header">
            <FaDatabase className="ml-capability-icon" />
            <h3>Alternative Data Processing</h3>
          </div>
          <div className="ml-capability-content">
            <p>
              Gain the edge previously available only to institutional investors by incorporating alternative data sources that provide leading indicators of market movements before they appear in price action.
            </p>
            <ul>
              <li>Natural language processing of news and social sentiment</li>
              <li>Satellite imagery analysis for commodity forecasting</li>
              <li>Web traffic and consumer behavior pattern recognition</li>
            </ul>
          </div>
        </div>

        <div className="ml-capability-card">
          <div className="ml-capability-header">
            <FaNetworkWired className="ml-capability-icon" />
            <h3>Correlation Intelligence</h3>
          </div>
          <div className="ml-capability-content">
            <p>
              Our systems continuously monitor relationships between thousands of assets to identify statistically significant correlations and divergences that create trading opportunities across markets.
            </p>
            <ul>
              <li>Dynamic correlation matrix analysis across global markets</li>
              <li>Statistical arbitrage opportunity detection</li>
              <li>Cross-asset anomaly identification</li>
            </ul>
          </div>
        </div>

        <div className="ml-capability-card">
          <div className="ml-capability-header">
            <FaRobot className="ml-capability-icon" />
            <h3>Adaptive Learning Systems</h3>
          </div>
          <div className="ml-capability-content">
            <p>
              Unlike static trading systems that degrade over time, our platform continuously evolves through reinforcement learning technologies that optimize strategies based on real-world performance.
            </p>
            <ul>
              <li>Continuous model retraining with performance feedback</li>
              <li>Automated hyperparameter optimization</li>
              <li>Multi-agent reinforcement learning for strategy evolution</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ml-architecture">
        <h2>Enterprise-Grade Architecture</h2>
        <div className="ml-architecture-grid">
          <div className="ml-architecture-item">
            <FaServer className="ml-architecture-icon" />
            <h4>High-Performance Computing</h4>
            <p>Dedicated GPU clusters process terabytes of market data to deliver real-time intelligence with minimal latency</p>
          </div>
          <div className="ml-architecture-item">
            <FaCogs className="ml-architecture-icon" />
            <h4>Distributed Processing</h4>
            <p>Resilient, scalable infrastructure ensures reliable operation during peak market volatility</p>
          </div>
          <div className="ml-architecture-item">
            <FaCode className="ml-architecture-icon" />
            <h4>Secure API Integration</h4>
            <p>Flexible API access enables seamless integration with your existing trading infrastructure</p>
          </div>
        </div>
      </section>

      <section className="ml-industries">
        <h2>Serving Multiple Client Profiles</h2>
        <div className="ml-industries-grid">
          <div className="ml-industry-card">
            <h3>Individual Traders</h3>
            <p>Access institutional-quality intelligence without the need for data science expertise or expensive infrastructure</p>
          </div>
          <div className="ml-industry-card">
            <h3>Investment Firms</h3>
            <p>Enhance your existing research capabilities with alternative data and machine learning insights</p>
          </div>
          <div className="ml-industry-card">
            <h3>Hedge Funds</h3>
            <p>Deploy our API services to complement your proprietary trading strategies and risk management systems</p>
          </div>
          <div className="ml-industry-card">
            <h3>Financial Advisors</h3>
            <p>Leverage data-driven insights to optimize client portfolios and demonstrate value-added services</p>
          </div>
        </div>
      </section>

      <section className="ml-contact">
        <div className="ml-contact-content">
          <h2>Ready to Experience Institutional-Grade Intelligence?</h2>
          <p>Schedule a personalized demonstration with our team to discover how our machine learning solutions can transform your trading operations</p>
          <button className="ml-contact-btn">Request Demo</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RobberBaron.ai</h4>
            <p>Institutional-grade trading intelligence for the modern investor.</p>
            <div className="social-links">
              <a href="#"><FaChartBar /></a>
              <a href="#"><FaChartLine /></a>
              <a href="#"><FaBrain /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <Link to="/machine-learning">Machine Learning</Link>
            <Link to="/technicals">Technicals</Link>
            <Link to="/university">University</Link>
            <Link to="/robber-barons">Robber Barons</Link>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">ML Blog</a>
            <a href="#">Community</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Legal</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 RobberBaron.ai. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MachineLearning; 