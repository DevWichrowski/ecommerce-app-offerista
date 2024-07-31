import { IProduct } from '../types/product';
import { IUser } from "@/app/types/user";

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
    const response = await fetch(`${API_URL}/users/1`);

    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
}
