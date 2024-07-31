import { useState, useEffect } from 'react';
import {ICartItem, ICartItemWithDetails} from "@/app/types/cart";
import {getProductById} from "@/app/api/api";



export const useFetchCartItemsWithDetails = (cart: { products: ICartItem[] } | null) => {
    const [cartItemsWithDetails, setCartItemsWithDetails] = useState<ICartItemWithDetails[]>([]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (cart) {
                const itemsWithDetails = await Promise.all(
                    cart.products.map(async (item) => {
                        const product = await getProductById(item.productId);
                        return { ...item, product };
                    })
                );
                setCartItemsWithDetails(itemsWithDetails);
            }
        };

        fetchProductDetails();
    }, [cart]);

    return cartItemsWithDetails;
};
