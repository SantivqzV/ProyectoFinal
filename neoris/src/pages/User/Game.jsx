import React, { useState } from 'react';
import { putCertificado } from '../../certificados';
import { decodeToken } from '../../utils';

const Game = () => {
  const [message, setMessage] = useState(""); // Estado para el mensaje
  const [buttonTextNivel1, setButtonTextNivel1] = useState('Subir'); // Estado para el texto del botón del Nivel 1
  const [buttonTextNivel2, setButtonTextNivel2] = useState('Subir'); // Estado para el texto del botón del Nivel 2
  const [buttonTextNivel3, setButtonTextNivel3] = useState('Subir'); // Estado para el texto del botón del Nivel 3
  const [buttonColorNivel1, setButtonColorNivel1] = useState('white'); // Estado para el color del botón del Nivel 1
  const [buttonColorNivel2, setButtonColorNivel2] = useState('white'); // Estado para el color del botón del Nivel 2
  const [buttonColorNivel3, setButtonColorNivel3] = useState('white'); // Estado para el color del botón del Nivel 3

  const infoUsuario = decodeToken();
  const id_trabajador = infoUsuario.sub;

  const handleButtonClick = async (nivel) => {
    try {
      // Cambiar el texto del botón a "Subido" y el color del texto a azul
      if (nivel === 1) {
        setButtonTextNivel1('Subido');
        setButtonColorNivel1('yellow');
      } else if (nivel === 2) {
        setButtonTextNivel2('Subido');
        setButtonColorNivel2('yellow');
      } else if (nivel === 3) {
        setButtonTextNivel3('Subido');
        setButtonColorNivel3('yellow');
      }

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
                <input type="file" />
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleButtonClick(1)} style={{ color: buttonColorNivel1 }}>{buttonTextNivel1}</button>
              </td>
            </tr>
            <tr>
              <td>Nivel 2</td>
              <td>
                <input type="file" />
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleButtonClick(2)} style={{ color: buttonColorNivel2 }}>{buttonTextNivel2}</button>
              </td>
            </tr>
            <tr>
              <td>Nivel 3</td>
              <td>
                <input type="file" />
                <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleButtonClick(3)} style={{ color: buttonColorNivel3 }}>{buttonTextNivel3}</button>
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
