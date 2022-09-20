import React, { useState } from 'react';
import SelectList from './selectList';


const SelectsAnidados = () => {
    const [state, setState] = useState('');
    const [town, setTown] = useState('');
    const [suburb, setSuburb] = useState('');

    const initialURL = "https://api.copomex.com/query/",
        TOKEN = "4a859df4-550e-4200-adb4-56375c55c026";


    return (
        <>
            <h2>Selects Anidados</h2>
            <h3>México</h3>
            <SelectList title="estado" url={`${initialURL}get_estados?token=${TOKEN}`} handleChange={(e) => { setState(e.target.value) }} />
            {
                state && (<SelectList title="municipios" url={`${initialURL}get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e) => { setTown(e.target.value) }} />)
            }
            {
                town && (<SelectList title="colonia" url={`${initialURL}get_colonia_por_municipio/${town}?token=${TOKEN}`} handleChange={(e) => { setSuburb(e.target.value) }} />)
            }
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </>
    );
}

export default SelectsAnidados;