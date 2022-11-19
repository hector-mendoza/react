import { useNavigate } from "react-router";

const SongTableRow = ({ el, id, handleDeleteSong }) => {
    console.log(el);

    let { bio, search } = el;
    let avatar = bio.artists[0].strArtistThumb;

    let avatarStyles = {
        width: "auto",
        height: "40px"
    };

    let navigate = useNavigate();

    return (
        <tr>
            {/* avatar, artist, song & actions*/}
            <td>
                <img style={avatarStyles} src={avatar} alt={search.artist} />
            </td>
            <td>{search.artist}</td>
            <td>{search.song}</td>
            <td>
                <button onClick={() => navigate(`/songs/${id}`)}>View More</button>
                <button onClick={() => handleDeleteSong(id)}>Delete</button>
            </td>
        </tr>
    );
}

export default SongTableRow;