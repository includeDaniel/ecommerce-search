type ProductProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    stock: number;
    image: string;
};

export const Product = ({
    id,
    title,
    description,
    price,
    discountPercentage,
    stock,
    image,
}: ProductProps) => {
    return (
        <div className="w-72 bg-white p-5 h-80 rounded">
            <div className="flex items-center justify-center">
                <img
                    className="h-36 w-44 border-black"
                    src={image}
                    alt="product image"
                />
            </div>
            <span className="text-base">{title}</span>
            <hr />
            <p
                className="text-xs text-gray-500 h-14 max-h-14"
                style={{ lineHeight: "normal" }}
            >
                {description}
            </p>
            <div className="flex place-content-start pt-5 text-lg items-center">
                <span className="text-slate-950 line-through pr-3">
                    {price}R$
                </span>

                <span className="text-red-700">
                    {(price - price * (discountPercentage / 100)).toFixed(2)}
                    R$
                </span>
                <span className="pl-10 text-xs text-gray-700">
                    {stock} in stock
                </span>
            </div>
        </div>
    );
};
