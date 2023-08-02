import { Dispatch, SetStateAction, useEffect } from "react";
import ProductGrid from ".";
import { FetchProductsType, ProductType } from "@/service/types";

type ProductsProps = {
    products: FetchProductsType;
    setProducts: Dispatch<SetStateAction<FetchProductsType>>;
};

export const Products = ({ products, setProducts }: ProductsProps) => {
    const getProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = (await response.json()) as FetchProductsType;
        setProducts(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const productsList = products.products?.map((v: any) => {
        return (
            <ProductGrid.Product
                key={v.id}
                id={v.id}
                title={v.title}
                description={v.description}
                price={v.price}
                discountPercentage={v.discountPercentage}
                image={v.images[0]}
                stock={v.stock}
            ></ProductGrid.Product>
        );
    });
    return <div className="m-20 grid grid-cols-4 gap-4">{productsList}</div>;
};
