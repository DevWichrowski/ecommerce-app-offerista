import { Suspense } from 'react';
import CartContent from "@/app/components/CartContent/CartContent";

export const revalidate = 3600;

const CartPage = () => {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>}>
            <CartContent />
        </Suspense>
    );
}

export default CartPage;
