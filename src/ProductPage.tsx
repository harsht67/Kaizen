import "./ProductPage.scss";

import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import Button from "./components/Button/Button";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

interface Product {
    title: string;
    description: string;
    price: string;
    image: string;
}

export default function ProductPage() {

    const { productId } = useParams<{ productId: string }>();

    const { data, error, loading } = useFetch<Product>(`https://fakestoreapi.com/products/${productId}`);

    if (loading) {
        return <LoadingSpinner/>
    }

    if (error || !data) {
        return <div>{error}</div>
    }

    console.log(data);

    const { image, title, description, price } = data;

    return (
        <article className="product-page">

            <figcaption className="product-page__image">
                <img src={image} alt="product image" />
            </figcaption>

            <section className="product-page__details">

                <header>
                    <h1 className="product-page__title">{title}</h1>
                    <p className="product-page__price">${price}</p>
                </header>

                <div className="product-page__buttons">
                    <Button color="blue">Add to Cart</Button>
                    <Button color="teal">Buy Now</Button>
                </div>

                <p className="product-page">
                    {description}
                </p>

            </section>

        </article>)
}