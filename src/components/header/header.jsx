import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <img src="logo.svg" />
                    </Link>
                </div>

                <div className="auth-options">
                    <Link to="#" className="login">Auctions</Link>
                    <Link to="#" className="login">Bidding</Link>
                    <Link to="#" className="login">About us</Link>
                    <Link to="/login" className="login">Login</Link>
                    <Link to="#" className="get-started-button">
                        <button className="get-started">Get Started</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
