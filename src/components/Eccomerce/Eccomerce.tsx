import { Product } from "./Product";
import { Search } from "./Search";

type EccomerceType = (() => JSX.Element) & {
    children: JSX.Element;
    Search: typeof Search;
    Product: typeof Product;
};

type EccomerceProps = Pick<EccomerceType, "children">;

const Eccomerce = ({ children }: EccomerceProps) => {
    return (
        <div
            data-testid="todo"
            className="w-100 flex items-center justify-center flex-col bg-slate-800 text-white"
        >
            {children}
        </div>
    );
};

export default Eccomerce as unknown as EccomerceType;
