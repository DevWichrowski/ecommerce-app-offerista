import Link from 'next/link';
import Image from 'next/image';
import { IProduct } from '../types/product';

const ProductCard = ({ product }: { product: IProduct }) => {
    return (
        <Link href={`/products/${product.id}`} className="group">
            <div className="w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-5">
                <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-lg">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        quality={50}
                        className="max-w-full max-h-full object-contain transition duration-300 ease-in-out group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 group-hover:text-gray-900 transition duration-300 ease-in-out">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
            </div>
        </Link>
    );
}

export default ProductCard;
