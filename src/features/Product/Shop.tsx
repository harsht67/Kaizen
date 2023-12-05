import PageLayout from "../../PageLayout";
import { Product } from "./Product";
import "./Shop.scss";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import { useFetch } from '../../hooks/useFetch'

export interface Product {
    id: string;
    title: string;
    price: string;
    image: string;
}

export default function Shop() {

    const { data, error, loading } = useFetch<Product[]>("https://fakestoreapi.com/products");

    if (loading) {
        return <LoadingSpinner />
    }

    if (error || !data) {
        return <div>{error}</div>
    }

    return (
        <PageLayout>
            <div className="shop">
                {
                    data.map((product: Product) => <Product key={product.id} data={product} />)
                }
            </div>
        </PageLayout>
    )
}