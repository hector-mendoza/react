import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {

    const { db, error, loading } = useContext(CrudContext);

    return (
        <div>
            <h2>CRUD API - Context API</h2>
            <article className="grid-1-2">
                <CrudForm />
                {/* if db has something => render CrudTable */}
                {
                    db &&
                    <CrudTable />}
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