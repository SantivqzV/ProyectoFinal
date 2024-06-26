import axios from 'axios';
import Cookies from 'js-cookie';

export async function login(email, password) {
  try {
    const response = await axios.post('https://proyecto-final-server.vercel.app/login', {
      email,
      password
    });

    console.log(response.data);
    console.log(response.data);

    const token = response.data.session.access_token;

    console.log(token);

    Cookies.set('token', token, { expires: 7 });

    return response.data;
  } catch (error) {
    console.error('Login failed', error.response.data);
    return null;
  }
}

export async function SignUp(email, password, nombre, apellido1, apellido2, puesto, pais, ciudad, nombre_departamento) {
  const is_admin = 0;
  try {
    const response = await axios.post('https://proyecto-final-server.vercel.app/register', {
      email,
      password, 
      nombre,
      is_admin, 
      apellido1, 
      apellido2, 
      puesto, 
      pais, 
      ciudad, 
      nombre_departamento
    });

    
    return response.data;
  } catch (error) {
    console.error('Login failed', error.response.data);
    return null;
  }
}

export async function logout() {
  try {
    const response = await axios.post('https://proyecto-final-server.vercel.app/logout', {
      token: Cookies.get('token')
    });

    console.log(response.data);

    console.log('Logout Successful');

    //Refresh
    window.location.reload();

  } catch (error) {
    console.log(error);
    console.error('Logout failed', error.response.data);
  }
}

