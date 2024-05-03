import axios from 'axios';
import Cookies from 'js-cookie';

export async function login(email, password) {
  try {
    const response = await axios.post('http://localhost:5001/login', {
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
    console.log(email);
    console.log(password);
    console.log(nombre);
    console.log(apellido1);
    console.log(apellido2);
    console.log(puesto);
    console.log(pais);
    console.log(ciudad);
    console.log(nombre_departamento);
    console.log(is_admin);
    const response = await axios.post('http://localhost:5001/register', {
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

export async function logout() {
  try {
    const response = await axios.post('http://localhost:5001/logout', {
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

