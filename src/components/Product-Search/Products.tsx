import { useEffect } from "react";
import ProductGrid from ".";
import { ProductGridContainer } from "../ProductGridContainer";

type ProductsProps = {
    products: {
        products?: [];
    };
    setProducts: (value: JSON) => void;
};

export const Products = ({ products, setProducts }: ProductsProps) => {
    const getProducts = async () => {
        const data = await fetch("https://dummyjson.com/products");
        const allproducts = await data.json();
        setProducts(allproducts);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const productsList = products.products?.map((v: any) => {
        return (
            <>
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
            </>
        );
    });
    return <div className="m-20 grid grid-cols-4 gap-4">{productsList}</div>;
};
