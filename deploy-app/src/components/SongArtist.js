import React from 'react';

const SongArtist = ({ artist }) => {
    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistBanner} alt={artist.strArtist} />
            <p>
                {artist.intBornYear} - {artist.intDiedYear || "Presente"}
            </p>
            <p>{artist.strCountry}</p>
            <p><b>Género Musical:</b> {artist.strGenre} - {artist.strStyle}</p>
            {
                artist.strWebsite && <a href={`http://${artist.strWebsite}`} target="_blank" rel='noreferrer'>{artist.strWebsite}</a>
            }
            <p style={{ lineHeight: "1.6" }}>{artist.strBiographyEN}</p>
        </section>
    );
}

export default SongArtist;