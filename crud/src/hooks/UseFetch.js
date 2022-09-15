import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // whenever the URL changes
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);

                if (!res.ok) {
                    let err = new Error("Error en la petición FETCH");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ocurrió un error";
                    throw err;
                }

                // if res is ok
                const json = await res.json();

                // if no error
                if (!signal.aborted) {
                    setData(json);
                    setError(null);
                }
            } catch (error) {
                // if error (not from fetch)
                if (!signal.aborted) {
                    setData(null);
                    setError(error);
                }
            } finally {
                // if everything has finished
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        }

    }, [url]);

    return {
        data,
        error,
        loading
    }
}
