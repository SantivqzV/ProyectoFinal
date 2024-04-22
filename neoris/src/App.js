import React from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {useStateContext} from "./contexts/ContextProvider";
import { Dashboard, LoginPage } from './pages'

import './App.css'

const App = () => {
  const {activeMenu} = useStateContext();
  const isAdmin = true;
  const isAuth = false;

  return (
    <div>
      <BrowserRouter>
        <div className="dark:bg-main-dark-bg">
          <div>
            <Routes>
              <Route path="Login" element={isAuth? <Navigate to="/" /> : <LoginPage />} />
              <Route path="*" element={isAuth? <Dashboard isAdmin={isAdmin} activeMenu={activeMenu}/> : <Navigate to="login"/>} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
