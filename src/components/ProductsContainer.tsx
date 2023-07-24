import { useEffect, useState } from "react";
import { Input } from "./Products/Input";
import { Product } from "./Products/Product";

useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(console.log);
}, []);

const product = {
    id: 29,
    title: "Handcraft Chinese style",
    description:
        "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    price: 60,
    discountPercentage: 15.34,
    stock: 7, //in stock (7) items
    images: [
        "https://i.dummyjson.com/data/products/29/1.jpg",
        "https://i.dummyjson.com/data/products/29/2.jpg",
        "https://i.dummyjson.com/data/products/29/3.webp",
        "https://i.dummyjson.com/data/products/29/4.webp",
        "https://i.dummyjson.com/data/products/29/thumbnail.webp",
    ],
};

export const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    return (
        <>
            <Input />
            <br />
            <Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
                image={product.images[0]}
                stock={product.stock}
            ></Product>
        </>
    );
};
