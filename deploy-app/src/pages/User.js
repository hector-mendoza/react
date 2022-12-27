import { useParams } from "react-router-dom";

const User = () => {
    let params = useParams();
    // console.log(params);
    let { username, age } = params;
    return (
        <div>
            <h3>User Profile</h3>
            <p>Username: <b>{username}</b> and you are {age}  years old.</p>
        </div>
    );
}

export default User;