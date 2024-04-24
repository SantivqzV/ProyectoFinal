
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '@mui/material/Tooltip';
import { getCursos } from './utils';
import axios from 'axios';

//INvestigar Axios

import { HomeAdmin, ManageCourses, UserReviews, HomeUser, Game, Leaderboard, Accounts, Help, Settings } from './pages';
import { Button, ThemeSettings, Sidebar, Navbar, Footer, Notification, UserProfile, LineChart, Pie, Bar, Map, ChartsHeader, Header } from './components';


import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import {useStateContext} from "./contexts/ContextProvider";
import { Dashboard, LoginPage, ResetPassword, SignupPage } from './pages'

import './App.css'

const App = () => {
  const {activeMenu, isAuth} = useStateContext();
  const isAdmin = true;
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getCursos();
        setCursos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCursos();
  }, []);

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
            <div>
    {/* Render fetched data here */}
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre del Curso</th>
          <th>Categoría</th>
          <th>Duración (Horas)</th>
          <th>ID del Artículo</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        {cursos.map((curso) => (
          <tr key={curso.id_curso}>
            <td>{curso.id_curso}</td>
            <td>{curso.nombre_curso}</td>
            <td>{curso.categoria}</td>
            <td>{curso.duracion_horas}</td>
            <td>{curso.id_articulo}</td>
            <td>{curso.puntos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
        <div className=" dark:bg-main-dark-bg">
          <div>
            <Routes>
              <Route path="Login" element={isAuth? <Navigate to="/" /> : <LoginPage />} />
              <Route path="Signup" element={isAuth? <Navigate to="/" /> : <SignupPage />} />
              <Route path="ResetPassword" element={isAuth? <Navigate to="/" /> : <ResetPassword />} />
              <Route path="*" element={isAuth? <Dashboard isAdmin={isAdmin} activeMenu={activeMenu}/> : <Navigate to="login"/>} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
