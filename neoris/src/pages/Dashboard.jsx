// DashboardLayout.js
import React, {useEffect, useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeAdmin, HomeUser, Game, Leaderboard, Settings, Accounts, Help } from '.';

import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import {Sidebar} from '../components';

const Dashboard = ({ isAdmin, activeMenu }) => {
  return (
    <div>
      <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
        <Tooltip title="Settings">
          <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius:'50%'}}>
            <FiSettings className="text-2xl text-gray-500" />
          </button>
        </Tooltip>
      </div>
      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:ng-secondary-dark-bg bg-white '>
          <Sidebar isAdmin = {isAdmin} />
        </div>
      ): (
        <div className='w-0 dark:bg-secondary-dark-bg'>
          Sidebar
        </div>
      )}
      
      <div className={
        `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72' : 'flex-2'}`
      }>
        <div className='fixed md:static bg-main-bg darK:bg-main-dark-bg navbar w-full'>
          navbar
        </div>

        <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={isAdmin ? <HomeUser /> : <HomeAdmin />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Account" element={<Accounts />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </div>
      
      </div>
    </div>
  );
};


export default Dashboard;