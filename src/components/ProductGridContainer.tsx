import ProductGrid from "./Eccomerce-Search";
import { Products } from "./Eccomerce-Search/Products";

export const ProductGridContainer = () => {
    return (
        <>
            <ProductGrid>
                <ProductGrid.Search />
                <Products />
            </ProductGrid>
        </>
    );
};
