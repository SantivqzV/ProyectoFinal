import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    userProfile: false,
    notifcations: false, 
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider 
        value={{
            activeMenu, setActiveMenu
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);