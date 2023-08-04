import { useState } from "react";
import ProductGrid from "./ProductSearch";
import { ProductsType } from "@/service/types";

export const ProductGridContainer = () => {
    const [products, setProducts] = useState<ProductsType>({
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
