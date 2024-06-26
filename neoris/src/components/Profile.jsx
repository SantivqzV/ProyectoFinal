import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button2 } from '.';
import { ProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

import { logout } from '../auth';
import Cookies from 'js-cookie';

const Profile = ({firstName, lastName, email, position}) => {
  const {isClicked, initialState, setIsAuth, handleClick} = useStateContext();

  const handleLogout = async () => {
    await logout();
    handleClick();
    setIsAuth(false);
    Cookies.remove('token');
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button2
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {firstName} {lastName}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  {position}   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {email} </p>
        </div>
      </div>
      <div>
        {ProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button 
          style={{ backgroundColor: "white", color:"black", borderRadius:"10px"}} 
          className={`p-3 w-full hover:drop-shadow-xl`}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>

  );
};

export default Profile;