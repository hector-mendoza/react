import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from "./Loader";
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error404';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [bio, setBio] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) return;

        const fetchData = async () => {
            const { artist, song } = search;

            let artistURL = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
                songURL = `https://private-anon-54c86cdbee-lyricsovh.apiary-mock.com/v1/${artist}/${song}`;

            setLoading(true);

            const [artistRes, songRes] = await Promise.all(
                [
                    helpHttp().get(artistURL),
                    helpHttp().get(songURL)
                ]
            );

            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
        };

        fetchData();
    }, [search]);

    // receive data from form
    const handleSearch = (data) => {
        // console.log(data);
        setSearch(data);
    };

    return (
        <>
            <article className='grid-1-3'>
                <HashRouter>
                    <header>
                        <h2>Song Search</h2>
                        <NavLink className="active" to="/songs">Home</NavLink>
                        <NavLink className="active" to="/songs/add">Song Table</NavLink>
                    </header>
                    {
                        loading && <Loader />
                    }
                    <Routes>
                        <Route path='/songs/*' element={
                            <Routes>
                                <Route path='/' element={
                                    <div>
                                        <SongForm handleSearch={handleSearch} />
                                        {
                                            search && !loading && <SongDetails
                                                search={search}
                                                lyric={lyric}
                                                bio={bio} />
                                        }
                                    </div>
                                } />
                                <Route path='/add/:id' element={
                                    <div>
                                        <h2>Table of our Favorite Songs</h2>
                                    </div>
                                } />
                                <Route path="*" element={<Error404 />} />
                            </Routes>
                        } />
                    </Routes>
                </HashRouter>
            </article>
        </>
    );
}

export default SongSearch;