import { useCallback, useState, KeyboardEvent, memo } from "react";

type SearchProps = {
    setProducts: () => {};
};

export const Search = memo(({ setProducts }: SearchProps) => {
    const [input, setInput] = useState("");

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        },
        []
    );

    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                fetch(`https://dummyjson.com/products/search?q=${input}`)
                    .then((res) => res.json())
                    .then(setProducts);
                setInput("");
            }
        },
        [input]
    );

    return (
        <div className="flex justify-center">
            <input
                type="text"
                className="w-80 h-8"
                placeholder="Search..."
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
});
