import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = ({ goToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate DSU email
    if (!email.endsWith('@dsu.edu.in')) {
      setError('Please use your DSU email (e.g., yourname@dsu.edu.in)');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      // Signup logic here
      alert('Signed up successfully!');
      goToLogin();
    }
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1 className="signup-heading">Sign Up</h1>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">College Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your DSU college email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="userType">User Type</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="">Select user type</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              onChange={handleProfilePictureChange}
            />
          </div>

          {/* Checkbox in one line */}
          <div className="input-group terms">
            <label>
              <input type="checkbox" required /> I agree to the Terms and Conditions
            </label>
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account?{' '}
          <a href="#" onClick={goToLogin}>Login</a>
        </p>
      </div>

      {/* Background section with text only on the right side */}
      <div className="signup-background">
        <p>Join the DSUConnect Community</p>
        <p>Sign up to connect with fellow students and access valuable resources and events.</p>
      </div>
    </div>
  );
};

export default SignupPage;
