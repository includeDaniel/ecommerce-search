import { Product } from "./Product";
import { Products } from "./Products";
import { Search } from "./Search";

type ProductGridType = (() => JSX.Element) & {
    children: JSX.Element;
    Search: typeof Search;
    Product: typeof Product;
    Products: typeof Products;
};

type ProductGridProps = Pick<ProductGridType, "children">;

const ProductGrid = (props: ProductGridProps) => {
    return (
        <div data-testid="todo" className="w-full flex flex-col">
            {props.children}
        </div>
    );
};

export default ProductGrid as unknown as ProductGridType;