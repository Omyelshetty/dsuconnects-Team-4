import React, { useState } from 'react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = ({ goToLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email validation logic
    if (!email.endsWith('@dsu.edu.in')) {
      setError('Invalid email. Please use your DSU email.');
    } else {
      setError('');
      // Further submit logic (e.g., API call for reset link)
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">College Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-button">Send Reset Link</button>
        </form>
        {/* "Back to Login" functionality */}
        <a href="#" className="back-to-login" onClick={goToLogin}>Back to Login</a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
