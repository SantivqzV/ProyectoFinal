import React, { createContext, useContext, useState } from 'react';

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
            setIsAuth
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);