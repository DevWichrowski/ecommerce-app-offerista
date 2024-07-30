import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from "@/app/api/api";

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
        <div>
            <div className="pt-6">
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={400}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:border-l lg:border-gray-200 lg:pl-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
                        <p className="text-3xl tracking-tight text-gray-900 mt-4">${product.price.toFixed(2)}</p>
                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <p className="text-base text-gray-900">{product.description}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-sm font-medium text-gray-900">Category</h3>
                            <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
