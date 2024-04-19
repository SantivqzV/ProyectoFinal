import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import { Routes, Route } from 'react-router-dom';
import { getTrabajadores } from './utils';
//INvestigar Axios

import { HomeAdmin, ManageCourses, UserReviews, HomeUser, Game, Leaderboard, Accounts, Help, Settings } from './pages';
import { Button, ThemeSettings, Sidebar, Navbar, Footer, Notification, UserProfile, LineChart, Pie, Bar, Map, ChartsHeader, Header } from './components';

import './App.css'

const App = () => {
  const activeMenu = true;
  const isAdmin = true;
  const [trabajadores, setTrabajadores] = useState([]);
  useEffect(()=>{setTrabajadores(getTrabajadores()); },[])

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <Tooltip title="Settings">
              <button type="button" className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius:'50%'}}>
                <FiSettings className="text-2xl text-gray-500" />
              </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:ng-secondary-dark-bg bg-white '>
              <Sidebar />
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
          </div>

          <div>

            <Routes>
              {/* Dashboard */}
              {/* <Route path="/" element="home" />
              <Route path="/home" element="home" />
              <Route path="/game" element="game" />
              <Route path="/leaderboard" element="leaderboard" /> */}

              {/* Others */}
              <Route path="/settings" element={isAdmin? <Settings/> : <HomeUser/>} />
              {/* <Route path="/account" element="account" />
              <Route path="/help" element="help" /> */}
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
