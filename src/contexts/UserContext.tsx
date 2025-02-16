'use client';

import React, { createContext, useContext } from 'react';
import { IUser } from "@/app/types/user";

const UserContext = createContext<IUser | null>(null);

export const UserProvider = ({ children, user }: { children: React.ReactNode; user: IUser }) => {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    
    return context;
}
