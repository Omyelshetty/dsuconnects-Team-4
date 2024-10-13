import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="dashboard-header-content">
          <h1>Welcome back, [User's Name]!</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="dashboard-main-content">
        {/* Upcoming Events Section */}
        <div className="dashboard-section upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-card">
            <h3>Tech Talk</h3>
            <p>2024-03-15 at 14:00</p>
          </div>
          <div className="event-card">
            <h3>Career Fair</h3>
            <p>2024-03-20 at 10:00</p>
          </div>
          <div className="event-card">
            <h3>Hackathon</h3>
            <p>2024-03-25 at 09:00</p>
          </div>
        </div>

        {/* Recent Discussions Section */}
        <div className="dashboard-section recent-discussions">
          <h2>Recent Discussions</h2>
          <div className="discussion-card">
            <h3>Best study techniques</h3>
            <p>by Jane Doe</p>
            <button className="join-button">Join Discussion</button>
          </div>
          <div className="discussion-card">
            <h3>Internship opportunities</h3>
            <p>by John Smith</p>
            <button className="join-button">Join Discussion</button>
          </div>
          <div className="discussion-card">
            <h3>Campus events this week</h3>
            <p>by Alice Johnson</p>
            <button className="join-button">Join Discussion</button>
          </div>
        </div>
      </div>

      {/* Quick Resources Section */}
      <div className="quick-resources">
        <h2>Quick Resources</h2>
        <div className="resource-links">
          <button className="resource-button">Library</button>
          <button className="resource-button">Course Catalog</button>
          <button className="resource-button">Academic Calendar</button>
          <button className="resource-button">Student Services</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>© 2024 DSUConnect</p>
      </footer>
    </div>
  );
};

export default UserDashboard;
