import { Dispatch, SetStateAction, useEffect } from "react";
import ProductGrid from ".";
import { ProductsType } from "@/service/types";

type ProductsProps = {
    products: ProductsType;
    setProducts: Dispatch<SetStateAction<ProductsType>>;
};

export const Products = ({ products, setProducts }: ProductsProps) => {
    const getProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = (await response.json()) as ProductsType;
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
                image={v.images}
                stock={v.stock}
            ></ProductGrid.Product>
        );
    });
    return <div className="m-20 grid grid-cols-4 gap-4">{productsList}</div>;
};
