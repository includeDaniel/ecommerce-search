"use client";

import { ProductsContainer } from "../components/ProductsContainer";
import "../css/global.css";
import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(console.log);
    }, []);

    return (
        <div className="w-full flex items-center pt-20 flex-col min-h-screen max-h-max bg-slate-400">
            <ProductsContainer />
        </div>
    );
}
