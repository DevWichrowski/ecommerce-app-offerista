import Image from 'next/image';
import { notFound } from 'next/navigation';
import {getAllProducts, getProductById} from "@/app/api/api";


export const revalidate = 3600;

export const generateStaticParams= async() => {
    const products = await getAllProducts();
    return products.map((product) => ({
        productId: product.id.toString(),
    }));
}

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
    const product = await getProductById(parseInt(params.productId));
    return {
        title: `${product.title} | E-commerce Store`,
        description: product.description,
    };
}

const ProductPage = async ({ params }: { params: { productId: string } }) => {
    const product = await getProductById(parseInt(params.productId));

    if (!product) {
        return notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="flex-grow flex items-start sm:items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8">
                        <div className="w-full lg:w-1/2 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={400}
                                height={400}
                                quality={50}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="mt-10 lg:mt-0 lg:w-1/2">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                {product.title}
                            </h1>
                            <div className="mt-3">
                                <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
                            </div>
                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-sm font-medium text-gray-900">Category</h3>
                                <p className="mt-2 text-sm text-gray-500">{product.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
