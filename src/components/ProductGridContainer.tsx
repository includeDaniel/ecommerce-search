import { useState } from "react";
import ProductGrid from "./ProductSearch";
import { FetchProductsType, ProductType } from "@/service/types";

export const ProductGridContainer = () => {
    const [products, setProducts] = useState<FetchProductsType>({
        products: [],
    });
    return (
        <>
            <ProductGrid>
                <ProductGrid.Search setProducts={setProducts} />
                <ProductGrid.Products
                    products={products}
                    setProducts={setProducts}
                />
            </ProductGrid>
        </>
    );
};
