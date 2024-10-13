import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import UserDashboard from './UserDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [userData, setUserData] = useState(null); // Store logged-in user data

  const handleLogin = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUserData(storedUser);
      setCurrentPage('dashboard'); // Navigate to dashboard on success
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleSignup = (email, password) => {
    // Store the user credentials in localStorage for now
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Sign up successful! Please login.');
    setCurrentPage('login'); // After sign-up, redirect to login
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage goToSignup={() => setCurrentPage('signup')} onLogin={handleLogin} />;
      case 'signup':
        return <SignupPage goToLogin={() => setCurrentPage('login')} onSignup={handleSignup} />;
      case 'forgotpassword':
        return <ForgotPasswordPage goToLogin={() => setCurrentPage('login')} />;
      case 'dashboard':
        return <UserDashboard />;
      default:
        return <LoginPage goToSignup={() => setCurrentPage('signup')} onLogin={handleLogin} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      <footer>
        <div className="footer-text">© 2024 DSUConnect</div>
      </footer>
    </div>
  );
}

export default App;
