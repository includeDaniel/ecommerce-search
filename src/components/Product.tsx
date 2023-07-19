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
export const Product = () => {
    return (
        <div className="w-40 h-80">
            <img
                className="h-28 w-40"
                src={product.images[0]}
                alt="product image"
            />
            <span className="text-sm">{product.title}</span>
            <br />
            <span className="text-xs">{product.description}</span>
            <br />
            <div className="flex space-x-8">
                <span className="text-slate-950 line-through">
                    {product.price}R$
                </span>

                <span className="text-red-700">
                    {product.price -
                        product.price * (product.discountPercentage / 100)}
                </span>
            </div>
        </div>
    );
};
