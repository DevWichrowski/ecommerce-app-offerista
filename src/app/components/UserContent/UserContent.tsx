'use client';

import {useUser} from "@/contexts/UserContext";
import {useState, useEffect} from 'react';

const UserContent = () => {
    const user = useUser();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (user) {
            setIsLoaded(true);
        }
    }, [user]);

    if (!user) {
        return null;
    }

    return (
        <div data-testid="user-content"
             className={`max-w-4xl mx-auto p-6 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex items-center space-x-6">
                    <div className="relative">
                        <div data-testid="user-initials"
                             className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-blue-500">
                            {user.name.firstname[0]}{user.name.lastname[0]}
                        </div>
                    </div>
                    <div>
                        <h1 data-testid="user-full-name"
                            className="text-3xl font-bold text-white">{user.name.firstname} {user.name.lastname}</h1>
                        <p data-testid="user-email" className="text-blue-200">{user.email}</p>
                    </div>
                </div>
                <div className="p-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Username</dt>
                            <dd data-testid="user-username" className="mt-1 text-lg text-gray-900">{user.username}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">Phone</dt>
                            <dd data-testid="user-phone" className="mt-1 text-lg text-gray-900">{user.phone}</dd>
                        </div>
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd data-testid="user-address" className="mt-1 text-lg text-gray-900">
                                {user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default UserContent;
