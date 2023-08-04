import { Dispatch, SetStateAction, useEffect } from "react";
import ProductGrid from ".";
import { ProductType, ProductsType } from "@/service/types";
import { useFetch } from "@/hooks/useFetch";
import { base_url, products as products_url } from "@/service/constants";

type ProductsProps = {
    products: ProductsType;
    setProducts: Dispatch<SetStateAction<ProductsType>>;
};

export const Products = ({ products, setProducts }: ProductsProps) => {
    const { data, error } = useFetch<ProductsType>(
        `${base_url}${products_url}`
    );

    useEffect(() => {
        setProducts(data);
    }, [data]);

    if (error) return <p>There is an error.</p>;
    if (!products) return <p>Loading...</p>;
    const productsList = products?.products.map((v: ProductType) => {
        return (
            <ProductGrid.Product
                key={v.id}
                id={v.id}
                title={v.title}
                description={v.description}
                price={v.price}
                discountPercentage={v.discountPercentage}
                image={v.images}
                stock={v.stock}
            ></ProductGrid.Product>
        );
    });
    return (
        <div className="w-11/12 desktop:ml-14 desktop:grid-cols-5 desktop:gap-4 laptop:ml-10 laptop:grid-cols-4 laptop:gap-3 largecellphone:ml-8 largecellphone:grid-cols-3 cellphone:ml-4  cellphone:grid-cols-2 cellphone:gap-2 justify-center mt-10 grid">
            {productsList}
        </div>
    );
};
