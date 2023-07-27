import { useDebounce } from "@/hooks/useDebounce";
import React from "react";
import { useCallback, useState, KeyboardEvent, memo, useEffect } from "react";

type SearchProps = {
    setProducts: () => {};
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

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${debouncedValue}`)
            .then((res) => res.json())
            .then(setProducts);
    }, [debouncedValue]);

    return (
        <div className="flex justify-center">
            <input
                type="text"
                className="w-80 h-8"
                placeholder="Search..."
                value={input}
                onChange={handleChange}
            />
        </div>
    );
});
