import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {

    // if no data
    if (!lyric || !bio) return null;

    return (
        <>
            {
                lyric.error || lyric.err || lyric.name === "AbortError"
                    ?
                    <Message msg={`Error: No existe la canción "<em>${search.song}</em>"`} bgColor='#dc3545' />
                    :
                    <SongLyric title={search.song} lyrics={lyric.lyrics} />
            }
            {
                bio.artists
                    ?
                    <SongArtist artist={bio.artists[0]} />
                    :
                    <Message msg={`Error: No existe el intérprete "<em>${search.artist}</em>"`} bgColor='#dc3545' />
            }
        </>
    );
}

export default SongDetails;