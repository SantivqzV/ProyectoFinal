import axios from 'axios';
import Cookies from 'js-cookie';

export async function login(email, password) {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password
    });

    console.log(response.data);

    const token = response.data.Success.session.access_token;

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
    const response = await axios.post('http://localhost:5000/logout', {
      token: Cookies.get('token')
    });

    console.log(response.data);

    Cookies.remove('token');

    console.log('Logout Successful');

    //Refresh
    window.location.reload();

  } catch (error) {
    console.error('Logout failed', error.response.data);
  }
}