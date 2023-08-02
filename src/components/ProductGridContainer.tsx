import { useState } from "react";
import ProductGrid from "./ProductSearch";
import { ProductsType } from "@/service/types";

const url = "https://dummyjson.com/products";

export const ProductGridContainer = () => {
    const [products, setProducts] = useState<ProductsType>({
        products: [],
    });
    return (
        <>
            <ProductGrid>
                <ProductGrid.Search setProducts={setProducts} url={url} />
                <ProductGrid.Products
                    url={url}
                    products={products}
                    setProducts={setProducts}
                />
            </ProductGrid>
        </>
    );
};
