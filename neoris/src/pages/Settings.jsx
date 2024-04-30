import React, { useState } from 'react';


const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [leaderboardVisibility, setLeaderboardVisibility] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const toggleEmailNotifications = () => {
    setEmailNotifications(!emailNotifications);
  };

  const togglePushNotifications = () => {
    setPushNotifications(!pushNotifications);
  };

  const toggleLeaderboardVisibility = () => {
    setLeaderboardVisibility(!leaderboardVisibility);
  };

  return (
    <div style={{ height: 400, width: '100%', overflow: 'auto', fontFamily: 'Arial, sans-serif', fontSize: '16px', padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Settings</h2>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px', marginBottom: '20px' }}>
        <h3>General Settings</h3>
        <p style={{ marginBottom: '10px' }}>Manage general settings for your account.</p>
        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={toggleNotifications}
          />
          Enable Notifications
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={darkModeEnabled}
            onChange={toggleDarkMode}
          />
          Dark Mode
        </label>
      </div>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px', marginBottom: '20px' }}>
        <h3>Notification Settings</h3>
        <p style={{ marginBottom: '10px' }}>Configure how you receive notifications.</p>
        <label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={toggleEmailNotifications}
          />
          Email Notifications
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={pushNotifications}
            onChange={togglePushNotifications}
          />
          Push Notifications
        </label>
      </div>
      <div>
        <h3>Gamification Settings</h3>
        <p style={{ marginBottom: '10px' }}>Customize gamification features.</p>
        <label>
          <input
            type="checkbox"
            checked={leaderboardVisibility}
            onChange={toggleLeaderboardVisibility}
          />
          Show Leaderboard
        </label>
      </div>
    </div>
  );
};

export default Settings;
