import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const StateContext = createContext();

const initialState = {
    Profile: false,
    notifcations: false, 
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);

    const [isAuth, setIsAuth] = useState(false);

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
    }

    const [screenSize, setScreenSize] = useState(undefined);

    const [token, setToken] = useState(null);

    useEffect(() => {
        const tokenFromCookie = Cookies.get('token');
        if(tokenFromCookie){
            setToken(tokenFromCookie);
            setIsAuth(true);
        }
    })

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
            token
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);