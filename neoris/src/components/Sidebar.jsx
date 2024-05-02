import React from 'react'

import {Link, NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { Tooltip } from '@mui/material';

import {links} from "../data/SidebarPages"
import { useStateContext } from '../contexts/ContextProvider';
import icon from '../data/neorisIcon.png'; // replace 'path-to-your-image.png' with the actual path to your image
import logo from '../data/neorisLogo.png';

const Sidebar = ({isAdmin}) => {
  const {activeMenu, setActiveMenu, screenSize} = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    }
  }

  // Classname for active and normal links
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 bg-secondary-dark-bg text-white';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='flex relative'>
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (<>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={handleCloseSideBar}
            className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
              <img src={icon} alt="Logo" style={{width: '30px', height: '30px'}} />
              <img src={logo} alt="Second Logo" style={{width: '80px', height: '20px'}} /> 
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
                {item.links
                .filter((Link) => isAdmin || !Link.adminOnly)
                .map((Link) => (
                  <NavLink
                    to={`/${Link.name}`}
                    key={Link.name}
                    onClick={handleCloseSideBar}
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
    </div>
  )
}

export default Sidebar
