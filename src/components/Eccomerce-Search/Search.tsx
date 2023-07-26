import { useCallback, useEffect, useState } from "react";

export const Search = () => {
    const [input, setInput] = useState("");

    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${input}`)
            .then((res) => res.json())
            .then(console.log);
    }, []);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        },
        []
    );

    return (
        <div className="flex justify-center">
            <input type="text" className="w-80 h-8" onChange={handleChange} />
        </div>
    );
};
