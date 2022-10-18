import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <main>
                <h2>Welcome to the Homepage!</h2>
                <p>You can do this, I believe in you</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </>
    )
};

export default Home;