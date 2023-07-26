import { useEffect, useState } from "react";
import ProductGrid from ".";

export const Products = () => {
    const [products, setProducts]: any = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(setProducts);
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
