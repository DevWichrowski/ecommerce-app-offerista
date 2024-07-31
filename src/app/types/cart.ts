import {IProduct} from "@/app/types/product";

export interface ICartItem {
    productId: number;
    quantity: number;
}

export interface ICart {
    id: number;
    userId: number;
    date: string;
    products: ICartItem[];
}

export interface ICartItemWithDetails {
    productId: number;
    quantity: number;
    product: IProduct;
}
