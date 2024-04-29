import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Game = () => {
  const [files, setFiles] = useState({
    level1: null,
    level2: null,
    level3: null,
  });

  const handleFileChange = (event, level) => {
    const newFiles = { ...files };
    newFiles[level] = event.target.files[0];
    setFiles(newFiles);
  };

  const handleUpload = async (level) => {
    try {
      const formData = new FormData();
      formData.append('file', files[level]);

      // Aquí debes especificar la URL de tu API para actualizar el nivel
      await axios.put(`TU_URL_DE_API/${level}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(`Archivo del nivel ${level} cargado exitosamente`);
    } catch (error) {
      console.error(`Error al cargar el archivo del nivel ${level}:`, error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
     <h1 style={{ fontWeight: 'bold', fontSize: '2.5em', margin: '20px 0' }}>NEORIS QUEST</h1>
      <div style={{ display: 'inline-block' }}>
        <iframe
          title="Neoris Quest"
          src="https://itch.io/embed-upload/10296442?color=333333"
          allowFullScreen
          width="960"
          height="580"
          frameBorder="1"
          style={{ display: 'block' }}
        >
          <p>Your browser does not support iframes.</p>
          <a href="https://aylenaf.itch.io/parallax">Play Neoris Quest on itch.io</a>
        </iframe>
      </div>

      <div style={{ marginTop: '50px' }}>
        <h2>Subir Certificaciones</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Subir Archivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nivel 1</td>
              <td>
                <input type="file" onChange={(e) => handleFileChange(e, 'level1')} />
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleUpload('level1')}>" Subir "</button>
              </td>
            </tr>
            <tr>
              <td>Nivel 2</td>
              <td>
                <input type="file" onChange={(e) => handleFileChange(e, 'level2')} />
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleUpload('level2')}>" Subir "</button>
              </td>
            </tr>
            <tr>
              <td>Nivel 3</td>
              <td>
                <input type="file" onChange={(e) => handleFileChange(e, 'level3')} />
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleUpload('level3')}>" Subir "</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Game;
