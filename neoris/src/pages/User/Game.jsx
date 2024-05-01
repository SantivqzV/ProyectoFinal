import React, { useState } from 'react';
import { putCertificado } from '../../certificados';
import { decodeToken } from '../../utils';
import { Header} from "../../components";

const Game = () => {
  const [message, setMessage] = useState(""); // Estado para el mensaje
  const [buttonTextNivel1, setButtonTextNivel1] = useState('Submit'); // Estado para el texto del botón del Nivel 1
  const [buttonTextNivel2, setButtonTextNivel2] = useState('Submit'); // Estado para el texto del botón del Nivel 2
  const [buttonTextNivel3, setButtonTextNivel3] = useState('Submit'); // Estado para el texto del botón del Nivel 3
  const [buttonColorNivel1, setButtonColorNivel1] = useState('white'); // Estado para el color del botón del Nivel 1
  const [buttonColorNivel2, setButtonColorNivel2] = useState('white'); // Estado para el color del botón del Nivel 2
  const [buttonColorNivel3, setButtonColorNivel3] = useState('white'); // Estado para el color del botón del Nivel 3

  const infoUsuario = decodeToken();
  const id_trabajador = infoUsuario.sub;

  const handleButtonClick = async (nivel) => {
    try {
      // Cambiar el texto del botón a "Subido" y el color del texto a azul
      if (nivel === 1) {
        setButtonTextNivel1('Submitted');
        setButtonColorNivel1('green');
      } else if (nivel === 2) {
        setButtonTextNivel2('Submitted');
        setButtonColorNivel2('green');
      } else if (nivel === 3) {
        setButtonTextNivel3('Submitted');
        setButtonColorNivel3('green');
      }

      const data = await putCertificado(id_trabajador);
      console.log(data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Header title="Game" subtitle="Neoris Quest" />
      <h1 style={{ fontWeight: 'bold', fontSize: '2.5em', margin: '20px 0' }}></h1>
      <div style={{ display: 'inline-block' }}>
        <iframe
          title="Neoris Quest"
          src="https://itch.io/embed-upload/10307091?color=333333"
          allowFullScreen
          width="975"
          height="670"
          frameBorder="1"
          style={{ display: 'block' }}
        >
        </iframe>
      </div>

      
      <div style={{ marginTop: '80px', textAlign: 'left', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '1300px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Subir Certificaciones</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <h3>Nivel 1</h3>
            <input type="file" style={{ marginBottom: '5px' }} />
            <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleButtonClick(1)} style={{ color: buttonColorNivel1 }}>{buttonTextNivel1}</button>
          </div>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <h3>Nivel 2</h3>
            <input type="file" style={{ marginBottom: '5px' }} />
            <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleButtonClick(2)} style={{ color: buttonColorNivel2 }}>{buttonTextNivel2}</button>
          </div>
          <div style={{ flex: '1' }}>
            <h3>Nivel 3</h3>
            <input type="file" style={{ marginBottom: '5px' }} />
            <button className='bg-black rounded-xl text-white py-2' type="submit" onClick={() => handleButtonClick(3)} style={{ color: buttonColorNivel3 }}>{buttonTextNivel3}</button>
          </div>
        </div>
        {message && <p>{message}</p>} {/* Mostrar mensaje si está definido */}
      </div>
    </div>
  );
};
     
export default Game;
