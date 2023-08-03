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
    return (
        <div className="w-11/12 desktop:ml-14 desktop:grid-cols-5 desktop:gap-4 laptop:ml-10 laptop:grid-cols-4 tablet:ml-8 tablet:grid-cols-3 laptop:gap-3 cellphone:ml-3  cellphone:grid-cols-2 cellphone:gap-2 justify-center mt-10 grid">
            {productsList}
        </div>
    );
};
