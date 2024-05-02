import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiNotification3Line} from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import Tooltip from '@mui/material/Tooltip';

import avatar from '../data/avatar.jpg'

import {Button, Notification, Profile} from '.'

import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <Tooltip content={title}>
    <button 
      type="button" 
      onClick={customFunc} 
      style={{ color }} 
      className="relative text-xl rounded-full p-3 hover:bg-light-gray" 
    >
      <span 
        style={{background: dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2 '      
      />
      {icon}

    </button>
  </Tooltip>
)

function Navbar({firstName, lastName, email, position}) {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 900){
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu)=> !prevActiveMenu)} 
        icon={<AiOutlineMenu />} 
      />
      
      <div className='flex'>
        <NavButton 
          title="Notifications"
          dotColor="#03C9D7" 
          customFunc={() => handleClick('notification')} 
          icon={<RiNotification3Line />} 
        />

        <Tooltip title="Profile">
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' 
            onClick={()=>handleClick('Profile')}
          >
            <img className="rounded-full w-8 h-8" src={avatar} />
            <p>
              <span className='text-gray-400 text-14'>Hola, </span> {' '}
              <span className='text-gray-400 ml-1 text-14'>{firstName}</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </Tooltip>

        {isClicked.Profile && <Profile firstName={firstName} lastName={lastName} email={email} position={position}/>}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  )
}

export default Navbar