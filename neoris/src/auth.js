import axios from 'axios';

export async function login(email, password) {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password
    });

    

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Login failed', error.response.data);
    return null;
  }
}