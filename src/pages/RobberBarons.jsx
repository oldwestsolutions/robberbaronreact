import React from 'react';
import { FaCrown, FaChartLine, FaUsers, FaLightbulb, FaComments, FaCalendarAlt, FaBook, FaGlobeAmericas, FaHandshake, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './RobberBarons.css';

const RobberBarons = () => {
  return (
    <div className="barons-container">
      <nav className="navbar">
        <div className="logo">RobberBaron.ai</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/machine-learning">Machine Learning</Link>
          <Link to="/technicals">Technicals</Link>
          <Link to="/university">University</Link>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <header className="barons-hero">
        <div className="barons-hero-content">
          <div className="barons-badge">Elite Network</div>
          <h1>The Robber Barons Elite Community</h1>
          <p>Join an exclusive network of high-performing traders, institutional investors, and market experts</p>
          <button className="barons-cta-btn">Apply for Membership</button>
        </div>
      </header>

      <section className="barons-overview">
        <div className="barons-overview-content">
          <h2>A Premier Trading Network</h2>
          <p>
            The Robber Barons community brings together elite traders, fund managers, and market strategists in a confidential environment where actionable intelligence is shared and sophisticated trading strategies are developed.
          </p>
          <p>
            Unlike typical trading communities, membership is highly selective and based on demonstrated track record, professional credentials, or exceptional trading performance.
          </p>
        </div>
      </section>

      <section className="membership-benefits">
        <h2>Exclusive Membership Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon-container">
              <FaLightbulb className="benefit-icon" />
            </div>
            <h3>Proprietary Intelligence</h3>
            <p>Access institutional-level market insights and trading signals not available to the general public</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon-container">
              <FaUsers className="benefit-icon" />
            </div>
            <h3>Elite Network</h3>
            <p>Connect with successful traders, fund managers, and finance professionals in a confidential environment</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon-container">
              <FaChartLine className="benefit-icon" />
            </div>
            <h3>Advanced Strategies</h3>
            <p>Learn sophisticated trading methods used by professional traders and institutional investors</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon-container">
              <FaCrown className="benefit-icon" />
            </div>
            <h3>VIP Support</h3>
            <p>Receive priority attention from our team of market analysts and platform specialists</p>
          </div>
        </div>
      </section>

      <section className="membership-features">
        <h2>What Sets Us Apart</h2>
        <div className="features-container">
          <div className="feature-item">
            <FaComments className="feature-icon" />
            <div>
              <h3>Private Discussion Forums</h3>
              <p>Engage in confidential discussions on market conditions, trading strategies, and investment opportunities with other elite members</p>
            </div>
          </div>
          
          <div className="feature-item">
            <FaCalendarAlt className="feature-icon" />
            <div>
              <h3>Exclusive Webinars & Events</h3>
              <p>Participate in private sessions with renowned market experts, institutional traders, and financial industry leaders</p>
            </div>
          </div>
          
          <div className="feature-item">
            <FaBook className="feature-icon" />
            <div>
              <h3>Proprietary Research</h3>
              <p>Access institutional-quality research reports, market analyses, and trading strategy documentation</p>
            </div>
          </div>
          
          <div className="feature-item">
            <FaGlobeAmericas className="feature-icon" />
            <div>
              <h3>Global Market Coverage</h3>
              <p>Benefit from 24/7 insights across global markets, with specialized focus on high-opportunity sectors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="membership-tiers">
        <h2>Membership Tiers</h2>
        <div className="tiers-grid">
          <div className="tier-card">
            <div className="tier-header">
              <h3>Associate Baron</h3>
              <div className="tier-price">$2,500<span>/year</span></div>
            </div>
            <div className="tier-body">
              <ul>
                <li>Community forum access</li>
                <li>Monthly strategy webinars</li>
                <li>Standard trading signals</li>
                <li>Quarterly market outlook reports</li>
                <li>Basic networking events</li>
              </ul>
              <button className="tier-btn">Apply Now</button>
            </div>
          </div>
          
          <div className="tier-card featured-tier">
            <div className="tier-badge">Most Popular</div>
            <div className="tier-header">
              <h3>Executive Baron</h3>
              <div className="tier-price">$5,000<span>/year</span></div>
            </div>
            <div className="tier-body">
              <ul>
                <li>All Associate benefits</li>
                <li>Private discussion groups</li>
                <li>Premium trading signals</li>
                <li>Weekly strategy sessions</li>
                <li>1-on-1 monthly consultation</li>
                <li>Institutional research access</li>
              </ul>
              <button className="tier-btn">Apply Now</button>
            </div>
          </div>
          
          <div className="tier-card">
            <div className="tier-header">
              <h3>Sovereign Baron</h3>
              <div className="tier-price">$10,000<span>/year</span></div>
            </div>
            <div className="tier-body">
              <ul>
                <li>All Executive benefits</li>
                <li>Exclusive investment opportunities</li>
                <li>Custom strategy development</li>
                <li>Direct access to our analysts</li>
                <li>Private networking events</li>
                <li>Quarterly performance review</li>
                <li>Early access to new features</li>
              </ul>
              <button className="tier-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="member-profiles">
        <h2>Our Elite Members</h2>
        <div className="profiles-grid">
          <div className="profile-card">
            <div className="profile-image profile-image-1"></div>
            <h3>Jonathan W.</h3>
            <div className="profile-title">Former Hedge Fund Manager</div>
            <p>"The Robber Barons community has provided me with insights that rival what I had access to at my previous $2B fund. The caliber of discussion is exceptional."</p>
          </div>
          
          <div className="profile-card">
            <div className="profile-image profile-image-2"></div>
            <h3>Sophia R.</h3>
            <div className="profile-title">Institutional Derivatives Trader</div>
            <p>"I've been able to implement several proprietary strategies shared within the community that have significantly enhanced my trading performance."</p>
          </div>
          
          <div className="profile-card">
            <div className="profile-image profile-image-3"></div>
            <h3>Michael K.</h3>
            <div className="profile-title">Family Office Director</div>
            <p>"The connections I've made through the Robber Barons network have been invaluable for our investment portfolio and access to unique opportunities."</p>
          </div>
        </div>
      </section>

      <section className="membership-process">
        <h2>Application Process</h2>
        <div className="process-container">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Application</h3>
            <p>Submit your professional background, trading experience, and investment approach</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Review</h3>
            <p>Our committee evaluates applications based on experience, track record, and potential contribution</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Interview</h3>
            <p>Selected applicants participate in a discussion with current members and committee representatives</p>
          </div>
          
          <div className="process-arrow">→</div>
          
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Membership</h3>
            <p>Approved members receive full access to the Robber Barons community and exclusive benefits</p>
          </div>
        </div>
      </section>

      <section className="barons-contact">
        <div className="barons-contact-content">
          <div className="contact-left">
            <h2>Ready to Join the Elite?</h2>
            <p>The Robber Barons community maintains limited membership to ensure quality of discourse and exclusivity of shared intelligence.</p>
            <button className="barons-apply-btn">Request Application</button>
          </div>
          <div className="contact-right">
            <div className="contact-icon">
              <FaHandshake />
            </div>
            <p>Our membership committee is available to answer questions about the application process and membership benefits.</p>
            <div className="contact-method">
              <FaUserTie /> <span>Contact Membership Services</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>RobberBaron.ai</h4>
            <p>Institutional-grade trading intelligence for the modern investor.</p>
            <div className="social-links">
              <a href="#"><FaCrown /></a>
              <a href="#"><FaChartLine /></a>
              <a href="#"><FaUsers /></a>
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

export default RobberBarons; 