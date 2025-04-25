import React, { useEffect } from 'react';
import { FaChartLine, FaRobot, FaLock, FaChartBar, FaBell, FaUserTie, FaTwitter, FaLinkedin, FaGithub, FaBrain, FaCode, FaChartPie, FaExchangeAlt, FaRegLightbulb, FaUniversity, FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Add animation for elements when they come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.animate').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">RobberBaron.ai</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#ml-explained">Machine Learning</a>
          <a href="#indicators">Indicators</a>
          <a href="#trading-interface">Trading Interface</a>
          <a href="#pricing">Pricing</a>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content animate">
          <h1>Strategic Algorithmic Trading Powered by Enterprise-Grade Machine Learning</h1>
          <p>Unleash the power of institutional-grade AI technology, now accessible to individual traders and investment firms of all sizes</p>
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
          <button className="cta-button pulse-animation">Start Trading Now</button>
        </div>
        <div className="hero-visual animate">
          <div className="ml-visualization">
            <div className="visualization-overlay">Proprietary Algorithmic Intelligence</div>
          </div>
        </div>
      </header>

      <section id="features" className="features-section">
        <h2 className="section-title animate">Enterprise Trading Solutions</h2>
        <div className="features-grid">
          <div className="feature-card animate">
            <FaChartLine className="feature-icon" />
            <h3>Intelligent Signals</h3>
            <p>Our proprietary algorithms deliver institutional-quality trading signals based on multi-dimensional market analysis</p>
          </div>
          <div className="feature-card animate">
            <FaRobot className="feature-icon" />
            <h3>AI-Powered Execution</h3>
            <p>Leverage the same technology used by leading hedge funds to optimize entry and exit points across global markets</p>
          </div>
          <div className="feature-card animate">
            <FaLock className="feature-icon" />
            <h3>Enterprise Security</h3>
            <p>Military-grade encryption and multi-layered authentication protect your strategies and capital</p>
          </div>
        </div>
      </section>

      <section id="ml-explained" className="ml-section">
        <h2 className="section-title animate">Our Proprietary Intelligence Platform</h2>
        <div className="ml-content">
          <div className="ml-explanation animate">
            <h3>Institutional-Grade Machine Learning Services</h3>
            <p>RobberBaron.ai delivers hedge fund-level technological capabilities through our comprehensive suite of proprietary algorithms and AI systems. Our platform continuously processes terabytes of market data to deliver actionable intelligence:</p>
            
            <div className="ml-features">
              <div className="ml-feature-item">
                <FaBrain className="ml-icon" />
                <div>
                  <h4>Deep Neural Networks</h4>
                  <p>Our enterprise-grade neural networks process vast amounts of market data to identify profitable opportunities invisible to conventional analysis</p>
                </div>
              </div>
              
              <div className="ml-feature-item">
                <FaCode className="ml-icon" />
                <div>
                  <h4>Sentiment Intelligence</h4>
                  <p>Proprietary NLP engines analyze global news and social sentiment in real-time, giving you an information edge previously available only to institutional traders</p>
                </div>
              </div>
              
              <div className="ml-feature-item">
                <FaChartPie className="ml-icon" />
                <div>
                  <h4>Multi-Strategy Deployment</h4>
                  <p>Our platform continuously evaluates and deploys optimal trading strategies based on current market regimes and volatility conditions</p>
                </div>
              </div>
              
              <div className="ml-feature-item">
                <FaRegLightbulb className="ml-icon" />
                <div>
                  <h4>Adaptive Learning Systems</h4>
                  <p>Unlike static trading systems, our algorithms continuously evolve to maintain peak performance as market dynamics shift</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="ml-visual animate">
            <div className="ml-process-visualization">
              <div className="process-step">
                <div className="step-number">1</div>
                <p>Market Intelligence</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="step-number">2</div>
                <p>Signal Processing</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="step-number">3</div>
                <p>Risk Assessment</p>
              </div>
              <div className="process-arrow">→</div>
              <div className="process-step">
                <div className="step-number">4</div>
                <p>Trade Execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="indicators" className="indicators-section">
        <h2 className="section-title animate">Premium Trading Solutions</h2>
        <div className="indicators-grid">
          <div className="indicator-card animate">
            <FaChartBar className="indicator-icon" />
            <h3>Quantum Edge</h3>
            <p>Our flagship signal generation service with institutional-grade pattern recognition and 92% accuracy</p>
            <ul>
              <li>Cross-market analysis</li>
              <li>Precision entry/exit signals</li>
              <li>Dynamic risk parameters</li>
            </ul>
          </div>
          <div className="indicator-card animate">
            <FaBell className="indicator-icon" />
            <h3>Alpha Alert Pro</h3>
            <p>Real-time intelligence system delivering high-probability setups directly to your dashboard</p>
            <ul>
              <li>Custom alert configuration</li>
              <li>Multi-asset opportunity scanning</li>
              <li>Performance analytics dashboard</li>
            </ul>
          </div>
          <div className="indicator-card animate">
            <FaCrown className="indicator-icon" />
            <h3>Portfolio Intelligence</h3>
            <p>Enterprise-grade portfolio optimization using our proprietary risk management algorithms</p>
            <ul>
              <li>Institutional risk modeling</li>
              <li>AI-driven asset allocation</li>
              <li>Smart rebalancing intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="trading-interface" className="interface-section">
        <h2 className="section-title animate">Professional Trading Environment</h2>
        <div className="interface-content">
          <div className="interface-explanation animate">
            <h3>Institutional-Quality Trading Experience</h3>
            <p>Our platform delivers the power and functionality typically reserved for professional trading floors, with intuitive design that caters to traders of all experience levels.</p>
            
            <div className="interface-features">
              <div className="interface-feature-item">
                <FaExchangeAlt className="interface-icon" />
                <div>
                  <h4>Precision Execution</h4>
                  <p>Execute trades with institutional-grade speed and reliability, capitalizing on time-sensitive opportunities identified by our AI systems</p>
                </div>
              </div>
              
              <div className="interface-feature-item">
                <FaChartPie className="interface-icon" />
                <div>
                  <h4>Advanced Visualization</h4>
                  <p>Professional-grade charting and data visualization tools that transform complex signals into clear, actionable intelligence</p>
                </div>
              </div>
              
              <div className="interface-feature-item">
                <FaCode className="interface-icon" />
                <div>
                  <h4>Enterprise Integration</h4>
                  <p>Seamlessly connect with your existing trading infrastructure through our robust API services, enabling automated execution at institutional scale</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="interface-visual animate">
            <div className="interface-mockup">
              <div className="mockup-header">
                <div className="mockup-title">RobberBaron Intelligence Dashboard</div>
              </div>
              <div className="mockup-content">
                <div className="mockup-chart"></div>
                <div className="mockup-controls"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <h2 className="section-title animate">Choose Your Plan</h2>
        <div className="pricing-grid">
          <div className="pricing-card animate">
            <h3>Essential</h3>
            <div className="price">$49<span>/month</span></div>
            <ul>
              <li>Core Intelligence Indicators</li>
              <li>Alert Notifications</li>
              <li>Daily Market Briefings</li>
              <li>Community Access</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card premium animate">
            <div className="popular-tag">Most Popular</div>
            <h3>Professional</h3>
            <div className="price">$99<span>/month</span></div>
            <ul>
              <li>All Essential Features</li>
              <li>Advanced Intelligence Suite</li>
              <li>Real-time Decision Support</li>
              <li>Priority Service</li>
              <li>Strategy Backtesting Engine</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card animate">
            <h3>Institutional</h3>
            <div className="price">$199<span>/month</span></div>
            <ul>
              <li>All Professional Features</li>
              <li>Custom Intelligence Models</li>
              <li>Enterprise API Access</li>
              <li>Dedicated Account Team</li>
              <li>White Label Solutions</li>
            </ul>
            <button className="pricing-btn">Contact Sales</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RobberBaron.ai</h4>
            <p>Institutional-grade trading intelligence for the modern investor.</p>
            <div className="social-links">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
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

export default Home; 