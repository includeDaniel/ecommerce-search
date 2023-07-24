import { useEffect, useState } from "react";
import { Search } from "./Eccomerce/Search";
import { Product } from "./Eccomerce/Product";
import Eccomerce from "./Eccomerce/Eccomerce";

export const ProductsContainer = () => {
    const [eccomerce, setEccomerce] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(setEccomerce);
    }, []);

    const productsList = eccomerce.products?.map((v: any) => {
        return (
            <Product
                key={v.id}
                id={v.id}
                title={v.title}
                description={v.description}
                price={v.price}
                discountPercentage={v.discountPercentage}
                image={v.images[0]}
                stock={v.stock}
            ></Product>
        );
    });
    return (
        <>
            <Eccomerce>
                <Search></Search>
            </Eccomerce>
            <div>{productsList}</div>
        </>
    );
};
