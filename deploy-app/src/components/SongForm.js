import React, { useState } from 'react';

const SongForm = ({ handleSearch, handleSaveSong }) => {
    const initialForm = {
        artist: '',
        song: '',
    };
    const [form, setForm] = useState(initialForm);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.artist || !form.song) {
            alert('Datos incompletos...');
            setIsDisabled(true);
            return;
        }

        handleSearch(form);
        setForm(initialForm);
        setIsDisabled(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='artist' placeholder='Artist Name' onChange={handleChange} value={form.artist} />
                <input type="text" name='song' placeholder='Type the Songs name' onChange={handleChange} value={form.song} />
                <input type="submit" value='Submit' />
                <input type="button" onClick={handleSaveSong} value='Add To Favorites' disabled={isDisabled && "disabled"} />
            </form>
        </div>
    );
}

export default SongForm;