import { ProductType } from "@/service/types";

type ProductProps = {
    id: ProductType["id"];
    title: ProductType["title"];
    description: ProductType["description"];
    price: ProductType["price"];
    discountPercentage: ProductType["discountPercentage"];
    stock: ProductType["stock"];
    image: ProductType["images"];
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
        <div className="w-full h-full tablet:h-80 bg-white p-5 rounded">
            <div className="flex items-center justify-center">
                <img
                    className="w-full desktop:h-28 laptop:h-32 largecellphone:h-28 cellphone:h-20 border-black"
                    src={image[0]}
                    alt="product image"
                />
            </div>
            <p className="laptop:text-sm cellphone:text-xs truncate ">
                {title}
            </p>
            <hr />
            <p className="tablet:text-xxs cellphone:text-xxy text-gray-500 h-14 max-h-14 line-clamp-5">
                {description}
            </p>
            <div className="w-full pt-4 tablet:text-base cellphone:text-xs items-center">
                <span className="text-slate-950 line-through pr-2">
                    {price}R$
                </span>

                <span className="text-red-700">
                    {(price - price * (discountPercentage / 100)).toFixed(2)}
                    R$
                </span>
                <br />
                <span className=" tablet:text-xs cellphone:text-xxs text-gray-700">
                    {stock} in stock
                </span>
            </div>
        </div>
    );
};
