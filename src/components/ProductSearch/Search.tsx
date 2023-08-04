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
import { base_url, search } from "@/service/constants";
import { useFetch } from "@/hooks/useFetch";

type SearchProps = {
    setProducts: Dispatch<SetStateAction<ProductsType>>;
};

export const Search = memo(({ setProducts }: SearchProps) => {
    const [input, setInput] = useState("");
    const debouncedValue = useDebounce(input, 300);
    const { data, error } = useFetch(`${base_url}${search}${debouncedValue}`);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        },
        [input]
    );

    const filterProducts = async () => {
        setProducts(data);
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
