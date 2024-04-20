import React from 'react'

import {Link, NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { Tooltip } from '@mui/material';

import {links} from "../data/SidebarPages"
import { useStateContext } from '../contexts/ContextProvider';



const Sidebar = () => {
  const {activeMenu, setActiveMenu} = useStateContext();

  // Classname for active and normal links
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={() => setActiveMenu(false)}
          className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware/> <span>Neoris</span>
          </Link>
          <Tooltip title="Menu">
            <button type='button'
              onClick={() => setActiveMenu((prevActiveMenu)=> !prevActiveMenu)}
              className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
            >
              <MdOutlineCancel />
            </button>
          </Tooltip>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}  
              </p>
              {item.links.map((Link) => (
                <NavLink
                  to={`/${Link.name}`}
                  key={Link.name}
                  onClick={() => {}}
                  className={({isActive}) => 
                    isActive ? activeLink : normalLink}
                >
                  {Link.icon} 
                  <span className='capitalize'>
                    {Link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar
