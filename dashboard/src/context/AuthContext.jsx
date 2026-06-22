import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// 1. Create the Context
const AuthContext = createContext();

// 2. Create a custom hook for easy importing
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // CRITICAL: Starts as true!

    // Configure Axios globally so you don't have to type it everywhere
    axios.defaults.withCredentials = true;

    const logout = async ()=>{
        try{
            await axios.post('http://localhost:3002/api/auth/logout',{},{
                withCredentials:true
            });
            window.location.replace('http://localhost:5173/');
        } catch(err){
            console.error("Logout failed", err);
        }
    }

    const updateFunds = (newFund)=>{
        setUser((prevUser)=>{
            if(!prevUser) return null;
            return {
                ...prevUser,
                funds:newFund
            }
        })
    }

    useEffect(() => {
        const checkUserSession = async () => {
            try {
                // Ping the /me route we built
                const response = await axios.get('http://localhost:3002/api/auth/me',{
                    withCredentials:true
                });
                if (response.data.success) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (err) {
                // 401 Unauthorized means no valid cookie. This is normal.
                setUser(null);
            } finally {
                // Once we know the truth, turn off the loading screen
                setIsLoading(false);
            }
        };

        checkUserSession();
    }, []);


    // We pass the user data, and a way to manually update it (like after a successful login)
    return (
        <AuthContext.Provider value={{ user, setUser, isLoading, logout, updateFunds}}>
            {/* If checking session, show nothing (or a spinner) to prevent UI flicker */}
            {isLoading ? (
                <div className="h-screen w-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};