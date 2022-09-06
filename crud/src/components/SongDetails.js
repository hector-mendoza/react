import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
    return (
        <>
            <h2>Detalles</h2>
            <SongArtist />
            <SongLyric />
        </>
    );
}

export default SongDetails;