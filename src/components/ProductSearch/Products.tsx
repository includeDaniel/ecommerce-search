import { Dispatch, SetStateAction, useEffect } from "react";
import ProductGrid from ".";
import { ProductType, ProductsType } from "@/service/types";
import { useFetch } from "@/hooks/useFetch";

type ProductsProps = {
    products: ProductsType;
    setProducts: Dispatch<SetStateAction<ProductsType>>;
};

const url = "https://dummyjson.com/products";

export const Products = ({ products, setProducts }: ProductsProps) => {
    const { data, error } = useFetch<ProductsType>(url);

    const getProducts = async () => {
        try {
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const productsList = products.products.map((v: ProductType) => {
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
