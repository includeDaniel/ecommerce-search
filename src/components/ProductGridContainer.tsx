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
    const [products, setProducts] = useState<ProductsType>({
        products: [],
    });
    const [params, setParams] = useState("");
    const { data, error } = useFetch<ProductsType>(
        `${base_url}${products_url}${search}${params}`
    );

    return (
        <ProductGrid>
            <ProductGrid.Search setParams={setParams} />
            <ProductGrid.Products products={data} />
        </ProductGrid>
    );
};
