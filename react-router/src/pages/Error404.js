import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <h2>404 - NOT FOUND</h2>
            <p>⬇️ But you can check some useful links</p>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

export default Error404;