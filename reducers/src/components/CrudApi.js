import React, { useState, useEffect, useReducer } from "react";
import { TYPES } from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
    const url = 'http://localhost:5000/santos';

    // const [db, setDb] = useState(null);

    const [state, dispatch] = useReducer(crudReducer, crudInitialState);

    const { db } = state;

    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let api = helpHttp();

    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then(res => {
            if (!res.err) {
                // setDb(res);
                dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
                setError(null);
            } else {
                // setDb(null);
                dispatch({ type: TYPES.NO_DATA });
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
                // setDb([...db, res]);
                dispatch({ types: TYPES.CREATE_DATA, payload: res });
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
                // let newData = db.map((el) => (el.id === data.id ? data : el));
                // setDb(newData);
                dispatch({ type: TYPES.UPDATE_DATA, payload: res });
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
                    // let newData = db.filter((el) => (el.id !== id));
                    // setDb(newData);
                    dispatch({ type: TYPES.DELETE_DATA, payload: id });
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }
    };

    return (
        <div>
            <h2>CRUD API - JSON Server</h2>
            <article className="grid-1-2">
                <CrudForm
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />
                {/* if db has something => render CrudTable */}
                {
                    db &&
                    <CrudTable
                        data={db}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}
                    />}
                {
                    loading && <Loader />
                }
                {
                    error && <Message msg={`Error ${error.statusText}`} bgColor="#dc3545" />
                }
            </article>
        </div>
    );
};

export default CrudApi;