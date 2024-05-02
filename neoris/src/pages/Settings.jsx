import React, { useState } from 'react';
import { Header } from "../components";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [leaderboardVisibility, setLeaderboardVisibility] = useState(true);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
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
    <div style={{ height: '100%', width: '100%', overflow: 'auto', fontFamily: 'Arial, sans-serif', fontSize: '16px', padding: '20px' }}>
      <Header title="Configuraciones" subtitle="Maneja la configuración de tu cuenta" />
      <div style={{ backgroundColor: 'rgba(137, 210, 230, 0.5)', padding: '20px', borderRadius: '10px', marginBottom: '20px', marginTop: '20px' }}>
        <h2 style={{ marginBottom: '10px', color: '#333' }}>Configuración General</h2>
        <label style={{ color: '#333' }}>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={toggleNotifications}
          />
          Activar Notificaciones
        </label>
      </div>
      <div style={{ backgroundColor: 'rgba(137, 210, 230, 0.5)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '10px', color: '#333' }}>Configuración de Notificaciones</h2>
        <label style={{ color: '#333' }}>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={toggleEmailNotifications}
          />
          Notificaciones por Correo Electrónico
        </label>
        <br />
        <label style={{ color: '#333' }}>
          <input
            type="checkbox"
            checked={pushNotifications}
            onChange={togglePushNotifications}
          />
          Notificaciones Push
        </label>
      </div>
      <div style={{ backgroundColor: 'rgba(137, 210, 230, 0.5)', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ marginBottom: '10px', color: '#333' }}>Configuración de Juego</h2>
        <label style={{ color: '#333' }}>
          <input
            type="checkbox"
            checked={leaderboardVisibility}
            onChange={toggleLeaderboardVisibility}
          />
          Mostrar Tabla de Puntuaciones
        </label>
      </div>
    </div>
  );
};

export default Settings;
