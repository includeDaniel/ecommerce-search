import ProductGrid from ".";
import { ProductType, ProductsType } from "@/service/types";

type ProductsProps = {
    products: ProductsType;
    error: Error | undefined;
};

export const Products = ({ products, error }: ProductsProps) => {
    const productsList = products?.products.map((v: ProductType) => (
        <ProductGrid.Product
            key={v.id}
            id={v.id}
            title={v.title}
            description={v.description}
            price={v.price}
            discountPercentage={v.discountPercentage}
            image={v.images}
            stock={v.stock}
        />
    ));

    if (error) return <p>Could not load the products</p>;
    if (!products) return <p>Loading...</p>;
    return (
        <div className="w-11/12 desktop:ml-14 desktop:grid-cols-5 desktop:gap-4 laptop:ml-10 laptop:grid-cols-4 laptop:gap-3 largecellphone:ml-8 largecellphone:grid-cols-3 cellphone:ml-4  cellphone:grid-cols-2 cellphone:gap-2 justify-center mt-10 grid">
            {productsList}
        </div>
    );
};
