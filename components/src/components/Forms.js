import React, { useState } from 'react';

// forms on advanced way => everything in almost one state and one event
export default function Forms() {

    const [form, setForm] = useState({});

    // will handle every input, dropdown, textarea changes on the form
    const handleChanged = e => {
        setForm({
            // ...form => lo que ya tenga el formulario,
            // [e.target.name]: e.target.value => si ya existe el elemento en el state lo actualiza con el valor del target
            // result: agrega el elemento si no existe, de lo contrario lo actualiza con su nuevo valor
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    // will handle every checkbox change on the form
    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        });
    }

    // submit event
    const handleSubmit = e => {
        e.preventDefault();
        alert('form has been submitted');
    }
    return (
        <>
            <h2>Forms</h2>
            {/* {form.name} */}
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' value={form.name}
                    onChange={handleChanged} />

                <p>Choose your favorite JS ice-cream</p>
                <input type='radio' id='vanilla' name='ice'
                    value='vanilla' onChange={handleChanged} />
                <label htmlFor='vanilla'>Vanilla</label>
                <input type='radio' id='react' name='ice'
                    value='react' onChange={handleChanged} />
                <label htmlFor='react'>React</label>
                <input type='radio' id='angular' name='ice'
                    value='angular' onChange={handleChanged}
                    defaultChecked />
                <label htmlFor='angular'>Angular</label>

                <p>Choose your favorite programming language:</p>
                <select onChange={handleChanged} defaultValue="java">
                    <option>-----</option>
                    <option value="php">PHP</option>
                    <option value="java">Java</option>
                </select>

                <p>Choose your favorites JS flavor</p>
                <input type='checkbox' id='mango' name='mango'
                    onChange={handleChecked} />
                <label htmlFor='mango'>mango</label>
                <input type='checkbox' id='apple' name='apple'
                    onChange={handleChecked} />
                <label htmlFor='apple'>apple</label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}


// forms on easy way => one state for almost every form element
// export default function Forms() {

//     // inputs, textareas
//     const [name, setName] = useState('');

//     // radiobuttons
//     const [ice, setIce] = useState('');

//     // select/dropdowns
//     const [language, setLanguage] = useState('');

//     // checkbox
//     const [flavor, setFlavor] = useState(false);

//     // submit event
//     const handleSubmit = e => {
//         e.preventDefault();
//         alert('form has been submitted');
//     }
//     return (
//         <>
//             <h2>Forms</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor='name'>Name</label>
//                 <input type='text' id='name' name='name' value={name}
//                     onChange={(e) => setName(e.target.value)} />

//                 <p>Choose your favorite JS ice-cream</p>
//                 <input type='radio' id='vanilla' name='ice'
//                     value='vanilla' onChange={(e) => setIce(e.target.value)} />
//                 <label htmlFor='vanilla'>Vanilla</label>
//                 <input type='radio' id='react' name='ice'
//                     value='react' onChange={(e) => setIce(e.target.value)} />
//                 <label htmlFor='react'>React</label>
//                 <input type='radio' id='angular' name='ice'
//                     value='angular' onChange={(e) => setIce(e.target.value)}
//                     defaultChecked />
//                 <label htmlFor='angular'>Angular</label>

//                 <p>Choose your favorite programming language:</p>
//                 <select onChange={(e) => setLanguage(e.target.value)} defaultValue="java">
//                     <option>-----</option>
//                     <option value="php">PHP</option>
//                     <option value="java">Java</option>
//                 </select>

//                 <p>Choose your favorites JS flavor</p>
//                 <input type='checkbox' id='mango' name='mango'
//                     onChange={(e) => setFlavor(e.target.checked)} />
//                 <label htmlFor='mango'>mango</label>
//                 <input type='checkbox' id='apple' name='apple'
//                     onChange={(e) => setFlavor(e.target.checked)} />
//                 <label htmlFor='apple'>apple</label>
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//         </>
//     )
// }