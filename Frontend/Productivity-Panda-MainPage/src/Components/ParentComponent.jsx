import { createContext, useEffect, useState } from "react";

// Create a context for the parent component
export const ParentComponent = createContext();

// Create a provider component for the parent context
export function ParentComponentProvider({ children }) {
    // State to track if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect to check for a token in local storage when the component mounts
    useEffect(() => {
        const token = localStorage.getItem("TokenizedValue");
        if (token) {
            setIsLoggedIn(true); // If a token is found, set isLoggedIn to true
        }
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    // Value to be provided to context consumers
    const value = {
        isLoggedIn,
        setIsLoggedIn,
    };

    // Return the provider component with the value passed to its consumers
    return (
        <ParentComponent.Provider value={value}>
            {children} {/* Render the children components */}
        </ParentComponent.Provider> 
    );
}
