import { Product } from "./Product";
import { Products } from "./Products";
import Search from "./Search";

type ProductGridType = (({ children }: ProductGridProps) => JSX.Element) & {
    children: JSX.Element | JSX.Element[];
    Search: typeof Search;
    Product: typeof Product;
    Products: typeof Products;
};

type ProductGridProps = Pick<ProductGridType, "children">;

const ProductGrid = ({ children }: ProductGridProps) => {
    return (
        <div data-testid="todo" className="w-full flex flex-col">
            {children}
        </div>
    );
};

export default ProductGrid as ProductGridType;
