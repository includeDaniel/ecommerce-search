import { useDebounce } from "@/hooks/useDebounce";
import {
    useCallback,
    useState,
    memo,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { ProductsType } from "@/service/types";

type SearchProps = {
    setProducts: Dispatch<SetStateAction<ProductsType>>;
};

export const Search = memo(({ setProducts }: SearchProps) => {
    const [input, setInput] = useState("");
    const debouncedValue = useDebounce(input, 300);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        },
        [input]
    );

    const filterProducts = async () => {
        const data = await fetch(
            `https://dummyjson.com/products/search?q=${debouncedValue}`
        );
        const products = await data.json();
        setProducts(products);
    };

    useEffect(() => {
        filterProducts();
    }, [debouncedValue]);

    return (
        <div className="flex justify-center">
            <input
                type="text"
                className="tablet:w-96 cellphone:w-72 h-8 py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Search..."
                value={input}
                onChange={handleChange}
            />
        </div>
    );
});
