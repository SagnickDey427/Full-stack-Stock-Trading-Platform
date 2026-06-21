import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectRoute =() => {
    const { user, isLoading } = useAuth();
    useEffect(()=>{
        if(!isLoading && !user){
            const currPath = window.location.pathname;
            window.location.replace(`http://localhost:5173/auth/login?returnTo=${currPath}`);
        }
    },[user,isLoading]);
    if (isLoading) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600 font-medium">Verifying session...</p>
            </div>
        ); 
    }
    return user ? <Outlet/> : null;
};


export default ProtectRoute;