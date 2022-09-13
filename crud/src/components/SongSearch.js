import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import Loader from "./Loader";

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
            <h2>Song Search</h2>
            <article className='grid-1-3'>
                <SongForm handleSearch={handleSearch} />
                {
                    loading && <Loader />
                }

                {/* When search has data */}
                {
                    search && !loading && <SongDetails
                        search={search}
                        lyric={lyric}
                        bio={bio} />
                }
            </article>
        </>
    );
}

export default SongSearch;