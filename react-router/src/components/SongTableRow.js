import { Navigate } from "react-router";

const SongTableRow = ({ el, id, handleDeleteSong }) => {
    console.log(el);


    return (
        <tr>
            {/* avatar, artist, song & actions*/}
            <img src="" />
            <td>Artist</td>
            <td>Song</td>
            <td>
                <button onClick={() => <Navigate to={`/songs/view/${id}`} />}>View More</button>
                <button onClick={() => handleDeleteSong(id)}>Delete</button>
            </td>
        </tr>
    );
}

export default SongTableRow;