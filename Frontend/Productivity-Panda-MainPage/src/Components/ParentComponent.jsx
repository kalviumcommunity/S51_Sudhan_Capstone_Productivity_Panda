import { createContext, useEffect, useState } from "react";

export const ParentComponent = createContext();

export function ParentComponentProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("TokenizedValue");
        if (token) {
            setIsLoggedIn(true)
        }
    }, [])

    const value = {
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <ParentComponent.Provider value={value}>
            {
                children
            }
        </ParentComponent.Provider> 
    )
}