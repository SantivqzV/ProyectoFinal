import React, { useState, useEffect } from 'react';
import { putCertificado } from '../../certificados';
import { decodeToken } from '../../utils';
import { Header} from "../../components";
import Cookies from 'js-cookie';
import { sendId } from '../../utils';


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

  useEffect(() => {
    const Cookie = Cookies.get('token');
    sendId(Cookie)
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, [])
  

  const handleButtonClick = async (nivel) => {
    try {
      // Cambiar el texto del botón a "Subido" y el color del texto a azul
      if (nivel === 1) {
        setButtonTextNivel1('Subido');
        setButtonColorNivel1('green');
      } else if (nivel === 2) {
        setButtonTextNivel2('Subido');
        setButtonColorNivel2('green');
      } else if (nivel === 3) {
        setButtonTextNivel3('Subido');
        setButtonColorNivel3('green');
      }

      const data = await putCertificado(id_trabajador);
      console.log(data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="h-full w-full overflow-auto font-sans text-base p-5">
      <Header title="Neoris Quest" subtitle="Juega Ahora!" />
      <h1 className='font-bold text-4xl my-5'></h1>
      <div className='flex items-center justify-center w-full h-full'>
        <iframe
          title="Neoris Quest"
          src="https://itch.io/embed-upload/10323431?color=333333"
          allowFullScreen
          width="975"
          height="670"
          frameBorder="1"
          className='block'
        />
      </div>

      
      <div className='mt-20 text-left border border-gray-300 rounded p-5 shadow-md mx-auto' style={{ maxWidth: '975px' }}>
        <h2 className='mb-5 font-bold'>Subir Certificaciones</h2>
        <div className='flex flex-col justify-between'>
          <div className='flex-1 lg:mr-0 lg:mb-5 mr-5'>
            <h3>Nivel 1</h3>
            <input type="file" style={{ marginBottom: '5px' }} />
            <button className='bg-black rounded-xl text-white p-3' type="submit" onClick={() => handleButtonClick(1)} style={{ color: buttonColorNivel1 }}>{buttonTextNivel1}</button>
          </div>
          <div className='flex-1 lg:mr-0 lg:mb-5 mr-5'>
            <h3>Nivel 2</h3>
            <input type="file" style={{ marginBottom: '5px' }} />
            <button className='bg-black rounded-xl text-white p-3' type="submit" onClick={() => handleButtonClick(2)} style={{ color: buttonColorNivel2 }}>{buttonTextNivel2}</button>
          </div>
          <div className='flex-1 lg:mr-0 lg:mb-5 mr-5'>
            <h3>Nivel 3</h3>
            <input type="file" style={{ marginBottom: '5px' }} />
            <button className='bg-black rounded-xl text-white p-3' type="submit" onClick={() => handleButtonClick(3)} style={{ color: buttonColorNivel3 }}>{buttonTextNivel3}</button>
          </div>
        </div>
        {message && <p>{message}</p>} {/* Mostrar mensaje si está definido */}
      </div>
    </div>
  );
};
     
export default Game;
