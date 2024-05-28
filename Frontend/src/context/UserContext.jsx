import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const [displayname, setDisplayName] = useState('');

    return (
        <UserContext.Provider value={{ displayname, setDisplayName }}>
            {children}
        </UserContext.Provider>
    );
};

