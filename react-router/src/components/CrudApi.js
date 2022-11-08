import React, { useState, useEffect } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
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

    return (
        <div>
            <article className="grid-1-2">
                <HashRouter>
                    <header>
                        <h2>CRUD Api con Rutas</h2>
                        <nav>
                            <NavLink className="active" to="santos/">Santos</NavLink>
                            <NavLink className="active" to="santos/agregar">Agregar</NavLink>
                        </nav>
                    </header>
                    <Routes>
                        <Route path="santos/*" element={
                            <Routes>
                                <Route path="/" element={<h2>Home de Santos</h2>} />
                                <Route path="/agregar" element={<h2>Agregar Santos</h2>} />
                                <Route path="/editar/:id" element={<h2>Editar Santos</h2>} />
                                <Route path="*" element={<Error404 />} />
                            </Routes>
                        } />
                    </Routes>
                </HashRouter>
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