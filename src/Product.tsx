import "./Product.scss";
import {useNavigate} from "react-router-dom";

type ProductPropType = {
    data: {
        id: string,
        image: string,
        title: string,
        price: string
    }
}

export const Product = ({ data }: ProductPropType) => {
    
    const { id, image, title, price } = data;

    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate(`/product/${id}`);
    }

    return (
        <article className="product" onClick={goToProductPage}>
            <img className="product__image" src={image} alt="product image" />
            <h3 className="product__title">{title}</h3>
            <p className="product__price">${price}</p>
        </article>
    )
}