import React from 'react'
import CelebrationIcon from '@mui/icons-material/Celebration';
import avatar from '../../data/avatar.jpg';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Card from '@mui/material/Card';

const UserProfileCards = () => {
  
  const firstName = "Santiago";
  const lastName = "Vazquez";
  const pais = "Mexico";
  const position = "Jr Software Developer";

  
  return (
    <Card className="w-full h-full grid grid-cols-3 grid-rows-2 p-4 justify-center items-center">  
      {/* Top Row */}
      <div className=" justify-self-start flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-5 mt-6 py-3 w-full justify-center items-center">
          <div className="p-2 rounded-lg shadow-lg">
            <img
              className="rounded-full h-28 w-28"
              src={avatar}
              alt="user-profile"
            />
          </div>
        </div>
      </div>

      <div className=" justify-self-center flex flex-col gap-5 items-center justify-center col-span-2 sm:col-span-2 md:col-span-1 ">
        <div className="gap-5 mt-6  py-3 w-full justify-center items-center">
          <div className="text-center">
            <p className="font-semibold text-xl dark:text-gray-200 whitespace-nowrap"> {firstName} {lastName}</p>
            <p className="text-gray-500 text-sm dark:text-gray-400">  {position}   </p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {pais} </p>
          </div>
        </div>
      </div>

      <div className=" justify-self-end flex flex-col gap-5 items-center justify-center hidden sm:hidden md:block">
        <div className="flex gap-5 mt-6 py-3 w-full justify-center items-center">
          <div className="p-2 rounded-lg shadow-lg">
            <div className="h-28 w-28 flex items-center justify-center">
              <MilitaryTechIcon style={{ fontSize: '100%', height:'100%', width:"100%", color:"gold" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className=" justify-self-start flex flex-col items-center justify-center col-span-1">
          <div className="bg-gray-200 p-2 rounded-lg shadow-lg">
            <div className="h-28 w-28 flex items-center justify-center">
              <CelebrationIcon style={{ fontSize: '100%', height:'75%', width:"75%", color:"gold" }} />
            </div>
          </div>
      </div>

      <div className="justify-self-start flex flex-col gap-5 items-center justify-center col-span-2 w-full">
        <div className="bg-gray-200 p-2 rounded-lg shadow-lg w-full">
          <div className="h-28 w-full flex flex-col items-begin justify-center p-4">
            <p className="text-black font-medium">El Líder de la semana fue Elías</p>
            <hr className="border-t border-black my-2"></hr>
            <p className="text-black font-medium">Una Recompensa para reclamar</p>
            <hr className="border-t border-black my-2"></hr>
            <p className="text-black font-medium">Curso de Apache Spark en progreso</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserProfileCards