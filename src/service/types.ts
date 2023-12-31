// {"id": 30,
// "title": "Key Holder",
// "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
// "price": 30,
// "discountPercentage": 2.92,
// "rating": 4.92,
// "stock": 54,
// "brand": "Golden",
// "category": "home-decoration",
// "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
// "images": [
// "https://i.dummyjson.com/data/products/30/1.jpg",
// "https://i.dummyjson.com/data/products/30/2.jpg",
// "https://i.dummyjson.com/data/products/30/3.jpg",
// "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
// ]
// }

import { Dispatch, SetStateAction } from "react";

export type ProductType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

export type ProductsType = {
    products: ProductType[];
};
