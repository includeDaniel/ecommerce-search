"use client";

import { useState } from "react";
import ProductGrid from "./ProductSearch";
import { ProductsType } from "@/service/types";
import { useFetch } from "@/hooks/useFetch";
import {
    base_url,
    products as products_url,
    search,
} from "@/service/constants";

export const ProductGridContainer = () => {
    const [params, setParams] = useState("");
    const { data: products, error } = useFetch<ProductsType>(
        `${base_url}${products_url}${search}${params}`
    );
    if (error) return <p>There is an error.</p>;
    return (
        <ProductGrid>
            <ProductGrid.Search setParams={setParams} />
            <ProductGrid.Products products={products} />
        </ProductGrid>
    );
};
