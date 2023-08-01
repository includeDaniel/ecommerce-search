import { useState } from "react";
import ProductGrid from "./Product-Search";

export type ProductGridContainer = {
    products: {
        products: [];
    };
    setProducts: () => {};
};

export const ProductGridContainer = () => {
    const [products, setProducts]: any = useState([]);
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
