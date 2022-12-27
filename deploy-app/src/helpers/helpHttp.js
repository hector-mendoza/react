// helper in order 
export const helpHttp = () => {
    // options as object
    const customFetch = (endpoint, options) => {
        const defaultHeaders = {
            accept: "application/json",
        };
        const controller = new AbortController();
        options.signal = controller.signal;

        // if no methods were specified assign GET
        options.method = options.method || "GET";

        // if headers, we will add the default to the present headers
        // if not headers, we will just add the default
        options.headers = options.headers
            ?
            { ...defaultHeaders, ...options.headers }
            :
            defaultHeaders;

        // if options.body => receive the body as JSON & send to backend as string
        // if not => false and delete options.body
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        console.log(options);

        setTimeout(() => {
            controller.abort()
        }, 3000);


        return fetch(endpoint, options).then(
            (res) => res.ok
                ?
                res.json()
                :
                Promise.reject({
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "An error just happened..."
                })
        ).catch((err) => err)
    };

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFetch(url, options);
    };

    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFetch(url, options);
    };

    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFetch(url, options);
    };

    return {
        get,
        post,
        put,
        del,
    };
}