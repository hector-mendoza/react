import { useState, useEffect, createContext } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
    const url = 'http://localhost:5000/santos';
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let api = helpHttp();

    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then(res => {
            // console.log(res);
            if (!res.err) {
                setDb(res);
                setError(null);
            } else {
                setDb(null);
                setError(res);
            }
        });
        setLoading(false);
    }, [url]);

    const createData = (data) => {
        data.id = Date.now();
        //console.log(data);

        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };

        api.post(url, options).then((res) => {
            if (!res.err) {
                setDb([...db, res]);
            } else {
                setError(res);
            }
        });
    };

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;
        // console.log(endpoint);
        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };

        api.put(endpoint, options).then((res) => {
            if (!res.err) {
                let newData = db.map((el) => (el.id === data.id ? data : el));
                setDb(newData);
            } else {
                setError(res);
            }
        });
    };

    const deleteData = (id) => {
        let endpoint = `${url}/${id}`,
            options = {
                headers: { "content-type": "application/json" }
            },
            isDelete = window.confirm(`¿estás seguro de eliminar el registro con el ID: ${id}?`);

        // if user confirmed
        if (isDelete) {
            api.del(endpoint, options).then((res) => {
                if (!res.err) {
                    let newData = db.filter((el) => (el.id !== id));
                    setDb(newData);
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }
    };

    const data = {
        db,
        error,
        loading,
        dataToEdit,
        createData,
        setDataToEdit,
        updateData,
        deleteData
    };

    return (
        <CrudContext.Provider value={data}>
            {children}
        </CrudContext.Provider>
    );
}

export { CrudProvider };
export default CrudContext;