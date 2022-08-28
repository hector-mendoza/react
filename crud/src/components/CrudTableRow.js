import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
    let { name, constellation, id } = el;
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {constellation}
            </td>
            <td>
                <button onClick={() => setDataToEdit(el)}>EDITAR</button>
                <button onClick={() => deleteData(id)}>ELIMINAR</button>
            </td>
        </tr>
    );
}

export default CrudTableRow;