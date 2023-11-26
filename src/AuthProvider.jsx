import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

    useEffect(() => {
        console.log(users);
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged, users, setUsers }}>
            {children}
        </AuthContext.Provider>
    );
}
