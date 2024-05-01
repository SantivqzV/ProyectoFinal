import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getAdminDashboard, getUserDashboard } from '../utils';
import { decodeToken } from '../utils';

const StateContext = createContext();

const initialState = {
    Profile: false,
    notifcations: false, 
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [token, setToken] = useState(null);
    const [filter, setFilter] = useState('global');
    const [data, setData] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }

    

    useEffect(() => {
        const tokenFromCookie = Cookies.get('token');
        const tokenTemp = decodeToken(tokenFromCookie);
        if(tokenFromCookie){
            setToken(tokenFromCookie);
            setIsAuth(true);
            if(tokenTemp.user_metadata.is_admin == 1){
                setIsAdmin(true);
            }
            else{
                setIsAdmin(false);
            }
        }
    })

    useEffect(() => {
        console.log('useEffect');
        
        const fetchData = async () => {
          try {
            const DashboardData = await getAdminDashboard(filter);
            setData(DashboardData);
            setLoading(false);
            console.log(DashboardData);
          } catch (error) {
            console.error(error);
          }
        };
        
        if(isAdmin){
            fetchData();
        }
      }, [filter]);

    useEffect(() => {
        console.log('useEffect');
        
        const fetchData = async () => {
            try {
            const tokenFromCookie = Cookies.get('token');
            const DashboardData = await getUserDashboard(tokenFromCookie);
            setData(DashboardData);
            setLoading(false);
            console.log(DashboardData);
            } catch (error) {
            console.error(error);
            }
        };
        
        if(!isAdmin){
            fetchData();
        }
    }, []);

    return (
        <StateContext.Provider 
        value={{
            activeMenu, 
            setActiveMenu,
            isClicked, 
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            initialState,
            isAuth,
            setIsAuth,
            token,
            data,
            loading,
            setFilter,
            isAdmin
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);