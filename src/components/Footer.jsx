import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Contact Us</h4>
                <p>Email: support@yourcompany.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/support">Support</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Polyglot. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;