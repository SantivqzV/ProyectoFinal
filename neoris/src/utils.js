import axios from 'axios';

export const getCursos = async () => {
  try {
    const response = await axios.get("http://localhost:5000/cursos");
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};
