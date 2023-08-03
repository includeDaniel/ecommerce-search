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
        <div className="w-full tablet:h-80 bg-white p-5 rounded">
            <div className="flex items-center justify-center">
                <img
                    className="w-full tablet:h-36 tablet:w-44 cellphone:h-24 border-black"
                    src={image[0]}
                    alt="product image"
                />
            </div>
            <span className="tablet:text-base cellphone:text-xs">{title}</span>
            <hr />
            <p className="tablet:text-xs cellphone:text-xxs text-gray-500 h-14 max-h-14 cellphone:leading-extra-loose">
                {description}
            </p>
            <div className="flex  pt-5 tablet:text-lg cellphone:text-xs items-center">
                <span className="text-slate-950 line-through pr-3">
                    {price}R$
                </span>

                <span className="text-red-700">
                    {(price - price * (discountPercentage / 100)).toFixed(2)}
                    R$
                </span>
                <span className="tablet:pl-10 tablet:text-xs cellphone:text-xxs text-gray-700">
                    {stock} in stock
                </span>
            </div>
        </div>
    );
};
