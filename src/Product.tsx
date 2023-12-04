import "./Product.scss";

type ProductPropType = {
    data: {
        image: string,
        title: string,
        price: string
    }
}

export const Product = ({ data }: ProductPropType) => {
    const { image, title, price } = data;
    return (
        <article className="product">
            <img className="product__image" src={image} alt="product image" />
            <h3 className="product__title">{title}</h3>
            <p className="product__price">${price}</p>
        </article>
    )
}