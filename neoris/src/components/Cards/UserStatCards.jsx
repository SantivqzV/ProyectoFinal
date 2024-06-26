import React from 'react'
import Card from '@mui/material/Card';

const UserStatCards = ({data}) => {

  console.log(data);

  const cursosCompletados = data.cursosCompletados;
  const cursosProgreso = cursosCompletados ? data.cursoEnProgreso[0].nombre_curso : "N/A";
  const puntosTotales = cursosCompletados ? data.puntosTotales[0].puntaje : "0";

  return (
    <Card className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6 p-6 justify-center items-center">  
      {/* Top Row */}
      <div className="justify-self-start flex flex-col gap-5 items-center justify-center col-span-1 w-full h-full">
        <div className="bg-gray-200 rounded-lg shadow-lg w-full h-full p-5 relative">
          <p className='text-start text-gray-500 text-xl overflow-wrap break-word font-bold'>Cursos <br /> Completados</p>
          <p className='text-end  text-gray-900 text-4xl font-bold absolute bottom-0 right-0 pr-5 pb-5'>{cursosCompletados}</p>
        </div>
      </div>

      <div className="justify-self-start flex flex-col gap-5 items-center justify-center col-span-1 w-full h-full">
        <div className="bg-gray-200 rounded-lg shadow-lg w-full h-full p-5 relative">
          <p className='text-start text-gray-500 text-xl overflow-wrap break-word font-bold'>Puntos totales <br /> Ganados</p>
          <p className='text-end  text-gray-900 text-4xl font-bold absolute bottom-0 right-0 pr-5 pb-5'>{puntosTotales}</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="justify-self-start flex flex-col gap-5 items-center justify-center col-span-2 w-full h-full">
        <div className="bg-gray-200 rounded-lg shadow-lg w-full h-full p-5 relative">
          <div className="flex justify-center items-center">
            <p className='text-start text-gray-500 text-xl overflow-wrap break-word font-bold'>Curso en progreso</p>
          </div>
          <div className="flex justify-center items-center">
            <p className='text-center text-gray-900 text-2xl font-bold white-space normal pt-5'>{cursosProgreso}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserStatCards