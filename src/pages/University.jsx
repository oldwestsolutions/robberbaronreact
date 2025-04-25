import React from 'react';
import { FaUniversity, FaGraduationCap, FaBook, FaVideo, FaChartLine, FaUsers, FaCertificate, FaLaptopCode, FaLightbulb, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './University.css';

const University = () => {
  return (
    <div className="university-container">
      <nav className="navbar">
        <div className="logo">RobberBaron.ai</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/machine-learning">Machine Learning</Link>
          <Link to="/technicals">Technicals</Link>
          <Link to="/robber-barons">Robber Barons</Link>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <header className="university-hero">
        <div className="university-hero-content">
          <h1>RobberBaron University</h1>
          <p>Master algorithmic trading and machine learning techniques used by institutional investors</p>
          <button className="university-cta-btn">Explore Courses</button>
        </div>
      </header>

      <section className="university-overview">
        <div className="university-overview-content">
          <h2>Elevate Your Trading Capabilities</h2>
          <p>
            RobberBaron University provides institutional-quality education to traders and investors of all experience levels. Our comprehensive curriculum is designed by industry experts with decades of experience in quantitative finance, algorithmic trading, and machine learning.
          </p>
          <p>
            Whether you're looking to understand the basics of algorithmic trading or aiming to develop your own proprietary ML trading models, our structured learning paths will guide you toward mastery.
          </p>
        </div>
      </section>

      <section className="learning-paths">
        <h2>Specialized Learning Paths</h2>
        <div className="learning-paths-grid">
          <div className="learning-path-card">
            <div className="path-icon-container">
              <FaGraduationCap className="path-icon" />
            </div>
            <h3>Algorithmic Trading Fundamentals</h3>
            <p>Build a solid foundation in systematic trading strategies, backtesting methodologies, and algorithmic implementation</p>
            <ul>
              <li>Quantitative Analysis Basics</li>
              <li>Strategy Development Framework</li>
              <li>Risk Management Systems</li>
              <li>Execution Algorithms</li>
            </ul>
            <button className="path-btn">View Path</button>
          </div>
          
          <div className="learning-path-card">
            <div className="path-icon-container">
              <FaChartLine className="path-icon" />
            </div>
            <h3>Advanced Technical Analysis</h3>
            <p>Master sophisticated technical indicators, pattern recognition, and multi-timeframe analysis techniques</p>
            <ul>
              <li>Statistical Indicator Development</li>
              <li>Harmonic Pattern Recognition</li>
              <li>Volatility Analysis Models</li>
              <li>Order Flow Analysis</li>
            </ul>
            <button className="path-btn">View Path</button>
          </div>
          
          <div className="learning-path-card">
            <div className="path-icon-container">
              <FaLaptopCode className="path-icon" />
            </div>
            <h3>Machine Learning for Markets</h3>
            <p>Learn how to apply cutting-edge ML techniques specifically designed for financial market prediction</p>
            <ul>
              <li>Feature Engineering for Financial Data</li>
              <li>Deep Learning Market Models</li>
              <li>Natural Language Processing for News</li>
              <li>Reinforcement Learning Trading Systems</li>
            </ul>
            <button className="path-btn">View Path</button>
          </div>
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <div className="course-level">Intermediate</div>
            <h3>Neural Networks for Price Action Prediction</h3>
            <p>Learn how to build, train and deploy neural networks that can predict market movements based on historical price patterns</p>
            <div className="course-meta">
              <div className="course-duration">
                <FaBook /> 8 Modules
              </div>
              <div className="course-instructor">
                <FaChalkboardTeacher /> Dr. Michael Chen
              </div>
            </div>
            <button className="course-btn">Enroll Now</button>
          </div>
          
          <div className="course-card">
            <div className="course-level">Advanced</div>
            <h3>Institutional Portfolio Optimization</h3>
            <p>Master the same portfolio construction and optimization techniques used by leading hedge funds and asset managers</p>
            <div className="course-meta">
              <div className="course-duration">
                <FaBook /> 12 Modules
              </div>
              <div className="course-instructor">
                <FaChalkboardTeacher /> Sarah Williams, CFA
              </div>
            </div>
            <button className="course-btn">Enroll Now</button>
          </div>
          
          <div className="course-card">
            <div className="course-level">Beginner</div>
            <h3>Algorithmic Trading Framework</h3>
            <p>Build a complete algorithmic trading system from scratch, covering data processing, strategy implementation, and execution</p>
            <div className="course-meta">
              <div className="course-duration">
                <FaBook /> 10 Modules
              </div>
              <div className="course-instructor">
                <FaChalkboardTeacher /> James Rodriguez
              </div>
            </div>
            <button className="course-btn">Enroll Now</button>
          </div>
          
          <div className="course-card">
            <div className="course-level">Intermediate</div>
            <h3>Statistical Arbitrage Strategies</h3>
            <p>Learn how to identify and exploit statistical mispricings across related financial instruments</p>
            <div className="course-meta">
              <div className="course-duration">
                <FaBook /> 9 Modules
              </div>
              <div className="course-instructor">
                <FaChalkboardTeacher /> Dr. Emily Thompson
              </div>
            </div>
            <button className="course-btn">Enroll Now</button>
          </div>
        </div>
      </section>

      <section className="university-benefits">
        <h2>Why Choose RobberBaron University</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaLightbulb className="benefit-icon" />
            <h3>Industry Experts</h3>
            <p>Learn from instructors with proven track records at top trading firms and financial institutions</p>
          </div>
          
          <div className="benefit-card">
            <FaVideo className="benefit-icon" />
            <h3>Practical Focus</h3>
            <p>All courses emphasize hands-on learning with real-world trading scenarios and market data</p>
          </div>
          
          <div className="benefit-card">
            <FaUsers className="benefit-icon" />
            <h3>Community Access</h3>
            <p>Connect with a global network of algorithmic traders and quants for collaboration and support</p>
          </div>
          
          <div className="benefit-card">
            <FaCertificate className="benefit-icon" />
            <h3>Professional Certification</h3>
            <p>Earn industry-recognized credentials that demonstrate your algorithmic trading expertise</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The Machine Learning for Markets course completely transformed my trading approach. I've been able to develop strategies that consistently outperform my previous methods."</p>
            <div className="testimonial-author">
              <div className="testimonial-name">Mark J.</div>
              <div className="testimonial-title">Independent Trader</div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p>"As a fund manager, the advanced portfolio optimization techniques I learned have directly contributed to reducing drawdowns while maintaining strong returns for my clients."</p>
            <div className="testimonial-author">
              <div className="testimonial-name">Alexandra T.</div>
              <div className="testimonial-title">Hedge Fund Manager</div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <p>"The practical, code-focused approach made complex ML concepts accessible and immediately applicable to real trading scenarios. Exceptional curriculum."</p>
            <div className="testimonial-author">
              <div className="testimonial-name">David K.</div>
              <div className="testimonial-title">Quantitative Analyst</div>
            </div>
          </div>
        </div>
      </section>

      <section className="university-cta">
        <div className="university-cta-content">
          <h2>Ready to Elevate Your Trading Capabilities?</h2>
          <p>Join thousands of traders who have transformed their approach through our institutional-grade education</p>
          <button className="university-enroll-btn">Explore All Courses</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RobberBaron.ai</h4>
            <p>Institutional-grade trading intelligence for the modern investor.</p>
            <div className="social-links">
              <a href="#"><FaUniversity /></a>
              <a href="#"><FaChartLine /></a>
              <a href="#"><FaGraduationCap /></a>
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

export default University; 