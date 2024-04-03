"use client";
const { createContext, useContext, useState } = require("react");

export const stateContext = createContext();

export const ContexProvider = ({ children }) => {
    
    const [showSideBar, setShowSideBar] = useState(true);
    const [header, setHeader] = useState("Home");

    return (
        <stateContext.Provider
            value={{
                showSideBar,
                setShowSideBar,
                header,
                setHeader,
            }}
        >
            {children}
        </stateContext.Provider>
    );
};

export const useStateContext = () => {
    return useContext(stateContext);
};
