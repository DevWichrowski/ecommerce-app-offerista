import { Suspense } from 'react';
import UserContent from "@/app/components/UserContent/UserContent";

export const revalidate = 3600;

const UserPage = () => {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>}>
            <UserContent />
        </Suspense>
    );
}

export default UserPage;
