"use client";

import { useDebounce } from "@/hooks/useDebounce";
import {
    useCallback,
    useState,
    memo,
    useEffect,
    SetStateAction,
    Dispatch,
} from "react";

type SearchProps = {
    setParams: Dispatch<SetStateAction<string>>;
};

const Search = ({ setParams }: SearchProps) => {
    const [input, setInput] = useState("");
    const debouncedValue = useDebounce(input);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        },
        [input]
    );

    useEffect(() => {
        if (debouncedValue.length >= 3 || debouncedValue === "") {
            setParams(debouncedValue);
        }
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
};

export default memo(Search);
