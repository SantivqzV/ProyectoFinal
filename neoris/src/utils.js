import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';


export const getCursos = async () => {
  try {
    const response = await axios.get("http://localhost:5001/cursos");
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};



export function decodeToken(){
  const token = Cookies.get('token');

  if (!token) {
    return null;
  }

  const decoded = jwtDecode(token);

  return decoded;
}

