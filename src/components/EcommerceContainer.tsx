import { useEffect, useState } from "react";
import Eccomerce from "./Eccomerce-Search";

export const EccomerceContainer = () => {
    const [eccomerce, setEccomerce]: any = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(setEccomerce);
    }, []);

    const productsList = eccomerce.products?.map((v: any) => {
        return (
            <>
                <Eccomerce.Product
                    key={v.id}
                    id={v.id}
                    title={v.title}
                    description={v.description}
                    price={v.price}
                    discountPercentage={v.discountPercentage}
                    image={v.images[0]}
                    stock={v.stock}
                ></Eccomerce.Product>
            </>
        );
    });
    return (
        <>
            <Eccomerce>
                <div className="flex justify-center">
                    <Eccomerce.Search />
                </div>
                <div className="mt-20 bg-slate-300 grid grid-cols-4 gap-4">
                    {productsList}
                </div>
            </Eccomerce>
        </>
    );
};
