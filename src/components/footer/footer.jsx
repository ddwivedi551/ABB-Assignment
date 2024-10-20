import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <div className="logo">
                        <Link to="/">
                            <img src="logo.svg" />
                        </Link>
                    </div>
                    <div className='footer-about'>
                    <a href="#">Product</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    </div>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Copyright 2024. All rights reserved by GeniX.</p>
            </div>
        </footer>
    );
}

export default Footer;