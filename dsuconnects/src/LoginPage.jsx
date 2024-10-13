import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ goToForgotPassword, goToSignup, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password); // Call the login function with email and password
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="College Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="login-button">Login</button>
          
          <a href="#" className="forgot-link" onClick={goToForgotPassword}>
            Forgot Password?
          </a>
        </form>
        <p className="signup-text">
          Don't have an account?{' '}
          <a href="#" onClick={goToSignup}>Sign Up</a>
        </p>
      </div>

      <div className="image-section">
        <div className="quote">
          <p className="quote-bold">Connect, Collaborate, And Share with DSUConnect</p>
          <p className="quote-normal">Join our college community to access events, resources, and discussions tailored for DSU students.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
