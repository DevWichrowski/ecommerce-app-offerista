import {IProduct} from "@/app/types/product";
import ProductCard from "@/app/components/ProductCard/ProductCard";

const ProductList = ({products}: { products: IProduct[] }) => {
    return (
        <div data-testid="product-list"
             className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
