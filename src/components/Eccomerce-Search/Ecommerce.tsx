import { Product } from "./Product";
import { Search } from "./Search";

type EccomerceType = (() => JSX.Element) & {
    children: JSX.Element[];
    Search: typeof Search;
    Product: typeof Product;
};

type EccomerceProps = Pick<EccomerceType, "children">;

const Eccomerce = (props: EccomerceProps) => {
    return (
        <div data-testid="todo" className="w-100 flex flex-col">
            {props.children}
        </div>
    );
};

export default Eccomerce as unknown as EccomerceType;
