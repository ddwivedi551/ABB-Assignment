import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login-page.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      sessionStorage.setItem('GeniX-email', email);
      navigate('/dashboard');
    } catch (error) {
      setError('Please enter correct password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <p>Welcome back. Enter your credentials to access your account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
            </div>
            <div className='remember-login'>
              <input type="checkbox" />
              <label>Keep me signed in</label>
            </div>
            <button type="submit" className="login-button">Continue</button>
          </form>
          <div className="or-divider">
            <span>or sign up with</span>
          </div>
          <div className="social-login">
            <button className="google-button">Google</button>
            <button className="apple-button">Apple</button>
            <button className="facebook-button">Facebook</button>
          </div>
          <p className="signup-link">
            Don't have an Account? <a href="/register">Sign up here</a>
          </p>
        </div>
        <div className="login-illustration">
          <img src="login-image.svg" alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
