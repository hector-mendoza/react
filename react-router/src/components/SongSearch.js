import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from "./Loader";
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error404';
import SongTable from './SongTable';
import SongPage from './SongPage';

// just add an empty array if there no songs

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [bio, setBio] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [loading, setLoading] = useState(false);

    // state for our Songs
    const [mySongs, setMySongs] = useState(mySongsInit);

    useEffect(() => {
        // if (search === null) return;

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

        // save mySongs on the localStorage - add it on the useEffect
        localStorage.setItem("mySongs", JSON.stringify(mySongs));
    }, [search, mySongs]);

    // receive data from form
    const handleSearch = (data) => {
        // console.log(data);
        setSearch(data);
    };

    const handleSaveSong = () => {
        alert('Saving song on FAVORITES');

        // search, lyric & bio
        let currentSong = {
            search,
            lyric,
            bio
        };

        setMySongs((mySongs) => [...mySongs, currentSong]);
        setSearch(null);
    };

    // Songs Table will receive this handle
    const handleDeleteSong = (id) => {
        // alert(`deleting song width ID: ${id}`);

        let isDelete = window.confirm(`Are you sure to delete the song with the ID: ${id}`);

        if (isDelete) {
            let songs = mySongs.filter((el, index) => index !== id);
            setMySongs(songs);
            localStorage.setItem("mySongs", JSON.stringify(songs));
        }
    };

    return (
        <>
            <article className='grid-1-2'>
                <HashRouter>
                    <header>
                        <h2>Song Search</h2>
                        <nav>
                            <NavLink className="active" to="/songs">Home</NavLink>
                            {/* <NavLink className="active" to="/songs/add">Song Table</NavLink> */}
                        </nav>
                    </header>
                    {
                        loading && <Loader />
                    }
                    <Routes>
                        <Route path='/songs/*' element={
                            <Routes>
                                <Route path='/' element={
                                    <>
                                        <div>
                                            <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong} />
                                            {
                                                search && !loading &&
                                                <SongDetails search={search} lyric={lyric} bio={bio} />
                                            }
                                        </div>
                                        <div>
                                            <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
                                        </div>
                                    </>
                                } />
                                <Route path='/:id' element={
                                    <div>
                                        <h2>Your Song</h2>
                                        <SongPage mySongs={mySongs} />
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