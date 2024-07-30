import {getAllProducts} from "@/app/api/api";
import ProductList from "@/app/components/ProductList";

export const metadata = {
    title: 'Products | E-commerce Store',
    description: 'View all our available products',
};

const ProductsPage = async () => {
    const products = await getAllProducts();

    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
                <ProductList products={products} />
            </div>
        </div>
    );
}

export default ProductsPage;

