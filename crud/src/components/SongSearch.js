import React, { useEffect, useState } from 'react';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from "./Loader";
import Message from "./Message";

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    // receive data from form
    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <>
            <h2>Song Search</h2>
            {
                loading && <Loader />
            }
            <SongForm handleSearch={handleSearch} />
            <SongDetails
                search={search}
                lyric={lyric}
                bio={bio} />
        </>
    );
}

export default SongSearch;