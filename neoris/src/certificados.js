import axios from 'axios';




export const putCertificado = async (id_trabajador) => {
try {
    const response = await axios.put(`http://localhost:5001/put_certificado/${id_trabajador}`);
    const data = response.data;
    console.log(data);
    return data;
} catch (error) {
    console.error("Error updating data:", error);
    throw error; // Rethrow the error to handle it in the caller function
}
};