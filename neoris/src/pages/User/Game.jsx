import React, { useState } from 'react';
import { putCertificado } from '../../certificados';
import { decodeToken } from '../../utils';


const Game = () => {
  const [message, setMessage] = useState(""); // Estado para el mensaje


  const infoUsuario = decodeToken();
  const id_trabajador = infoUsuario.sub;
 //const id_trabajador = 2;


  const handleButtonClick = async () => {
    try {
      const data = await putCertificado(id_trabajador);
      console.log(data);
    } catch (error) {
      console.error("Error updating data:", error);
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
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={handleButtonClick}>Subir</button>
              </td>
            </tr>
            <tr>
              <td>Nivel 2</td>
              <td>
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={handleButtonClick}>Subir</button>
              </td>
            </tr>
            <tr>
              <td>Nivel 3</td>
              <td>
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={handleButtonClick}>Subir</button>
              </td>
            </tr>
          </tbody>
        </table>
        {message && <p>{message}</p>} {/* Mostrar mensaje si está definido */}
      </div>
    </div>
  );
};

export default Game;
