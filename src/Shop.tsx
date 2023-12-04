import { Product } from "./Product";
import "./Shop.scss";

import { useFetch } from './hooks/useFetch'

export interface Product {
    id: string;
    title: string;
    price: string;
    image: string;
}

export default function Shop() {

    const { data, error, loading } = useFetch<Product[]>("https://fakestoreapi.com/products");

    if (loading) {
        return <div>Loading...</div>
    }

    if (error || !data) {
        return <div>{error}</div>
    }

    return (
        <section className="shop">

            {
                data.map((product: Product) => <Product key={product.id} data={product} />)
            }

        </section>
    )
}