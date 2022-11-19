import { useParams } from "react-router-dom";
import SongDetails from "./SongDetails";

const SongPage = ({ mySongs }) => {
    let { id } = useParams();

    // mySongs[id] => the one we are looking for
    console.log(id, mySongs[id]);

    let currentSong = mySongs[id];

    // destructure the currentSong and pass to SongDetails component those args
    let { search, lyric, bio } = currentSong;
    return <SongDetails search={search} lyric={lyric} bio={bio} />;
}

export default SongPage;