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

    const getProducts = async () => {
        try {
            setProducts(data);
        } catch {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (error) return <p>There is an error.</p>;
    if (!data) return <p>Loading...</p>;
    const productsList = data.products.map((v: ProductType) => {
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
    return <div className="m-20 grid grid-cols-4 gap-4">{productsList}</div>;
};
