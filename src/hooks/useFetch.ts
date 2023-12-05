import { useEffect, useState } from "react"
import { Product } from "../features/Product/Shop";

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        }
        catch(error) {
            // setError(error);
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data, error, loading};
}