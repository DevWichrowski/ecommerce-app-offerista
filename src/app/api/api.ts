import { IProduct } from '../types/product';
import { IUser } from "@/app/types/user";
import {ICart} from "@/app/types/cart";
import {USER_ID} from "@/constants";

const API_URL = 'https://fakestoreapi.com';

export const getAllProducts = async (): Promise<IProduct[]> => {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}

export const getProductById = async (id: number): Promise<IProduct> => {
    const response = await fetch(`${API_URL}/products/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }

    return response.json();
}

export const getUser = async (): Promise<IUser> => {
    const response = await fetch(`${API_URL}/users/${USER_ID}`);

    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
}

export const getCart = async (): Promise<ICart> => {
    const response = await fetch(`${API_URL}/carts/${USER_ID}`);

    if (!response.ok){
        throw new Error('Failed to fetch cart');
    }

    return response.json();
}
