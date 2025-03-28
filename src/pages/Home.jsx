import React from 'react';
import { FaChartLine, FaRobot, FaLock, FaChartBar, FaBell, FaUserTie, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">RobberBaron.ai</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#indicators">Indicators</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <header className="hero-section">
        <h1>Trade Smarter with RobberBaron.ai</h1>
        <p>Sophisticated trading indicators, simplified for everyone</p>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Active Traders</p>
          </div>
          <div className="stat-item">
            <h3>85%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Market Coverage</p>
          </div>
        </div>
        <button className="cta-button">Start Trading Now</button>
      </header>

      <section id="features" className="features-section">
        <h2>Premium Trading Experience</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Smart Indicators</h3>
            <p>Clear, actionable trading signals based on proven strategies</p>
          </div>
          <div className="feature-card">
            <FaRobot className="feature-icon" />
            <h3>AI-Powered Analysis</h3>
            <p>Advanced algorithms working for your trading success</p>
          </div>
          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Secure Platform</h3>
            <p>Bank-grade security for your peace of mind</p>
          </div>
        </div>
      </section>

      <section id="indicators" className="indicators-section">
        <h2>Popular Trading Indicators</h2>
        <div className="indicators-grid">
          <div className="indicator-card">
            <FaChartBar className="indicator-icon" />
            <h3>Trend Master</h3>
            <p>Advanced trend detection with 92% accuracy</p>
            <ul>
              <li>Multiple timeframe analysis</li>
              <li>Smart entry/exit points</li>
              <li>Risk management overlay</li>
            </ul>
          </div>
          <div className="indicator-card">
            <FaBell className="indicator-icon" />
            <h3>Signal Pro</h3>
            <p>Real-time trading signals and alerts</p>
            <ul>
              <li>Custom alert settings</li>
              <li>Mobile notifications</li>
              <li>Performance tracking</li>
            </ul>
          </div>
          <div className="indicator-card">
            <FaUserTie className="indicator-icon" />
            <h3>Portfolio Optimizer</h3>
            <p>AI-driven portfolio management</p>
            <ul>
              <li>Risk assessment</li>
              <li>Asset allocation</li>
              <li>Rebalancing signals</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <h2>Choose Your Plan</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">$49<span>/month</span></div>
            <ul>
              <li>Basic Indicators</li>
              <li>Email Alerts</li>
              <li>Daily Market Analysis</li>
              <li>Community Access</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card premium">
            <div className="popular-tag">Most Popular</div>
            <h3>Professional</h3>
            <div className="price">$99<span>/month</span></div>
            <ul>
              <li>All Starter Features</li>
              <li>Advanced Indicators</li>
              <li>Real-time Alerts</li>
              <li>Priority Support</li>
              <li>Strategy Backtesting</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">$199<span>/month</span></div>
            <ul>
              <li>All Pro Features</li>
              <li>Custom Indicators</li>
              <li>API Access</li>
              <li>Dedicated Support</li>
              <li>White Label Options</li>
            </ul>
            <button className="pricing-btn">Contact Sales</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RobberBaron.ai</h4>
            <p>Making sophisticated trading accessible to everyone.</p>
            <div className="social-links">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Indicators</a>
            <a href="#">Pricing</a>
            <a href="#">API</a>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">Blog</a>
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

export default Home; 