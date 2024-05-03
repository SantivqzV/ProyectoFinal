import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';


export const getCursos = async () => {
  try {
    const response = await axios.get("https://proyecto-final-server.vercel.app/cursos");
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

export const getAdminDashboard = async (pais) => {
  try {
    const response = await axios.get(`https://proyecto-final-server.vercel.app/adminDashboard/${pais}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

export const getLeaderboard = async () => {
  try{
    const response = await axios.get(`https://proyecto-final-server.vercel.app/getLeaderboard/`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

export const getUserDashboard = async (token) => {
  try{
    const response = await axios.get(`https://proyecto-final-server.vercel.app/userDashboard/${token}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error){
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

export const sendId = async (token) => {
  try {
    const response = await axios.post(`https://proyecto-final-server.vercel.app/getIdFromToken/${token}`)
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("ERROR");
    throw error;
  }
}

export function decodeToken(){
  const token = Cookies.get('token');

  if (!token) {
    return null;
  }

  const decoded = jwtDecode(token);

  return decoded;
}

