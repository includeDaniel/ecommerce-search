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
        <div className="w-72 h-min bg-white p-5">
            <img
                className="h-44 w-56 border-black"
                src={product.images[0]}
                alt="product image"
            />
            <div>
                <span className="text-base">{product.title}</span>
            </div>
            <div>
                <span className="text-xs text-gray-500">
                    {product.description}
                </span>
                <br />
                <div className="flex place-content-start pt-5 text-lg items-center">
                    <span className="text-slate-950 line-through pr-3">
                        {product.price}R$
                    </span>

                    <span className="text-red-700">
                        {(
                            product.price -
                            product.price * (product.discountPercentage / 100)
                        ).toFixed(2)}
                        R$
                    </span>
                    <span className="pl-10 text-xs text-gray-700">
                        {product.stock} in stock
                    </span>
                </div>
            </div>
        </div>
    );
};
