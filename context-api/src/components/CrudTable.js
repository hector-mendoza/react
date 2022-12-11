import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {

    // data as an alias of db (variable with the data in the Context)
    const { db: data } = useContext(CrudContext);

    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((el) => (
                            <CrudTableRow
                                key={el.id}
                                el={el} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CrudTable;