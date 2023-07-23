import { useEffect, useState } from "react";
import { Input } from "./Products/Input";
import { Product } from "./Products/Product";

useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(console.log);
}, []);

export const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    return (
        <>
            <Input />
            <br />
            <Product></Product>
        </>
    );
};
