import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <main>
                <h2>Welcome to the About Page!</h2>
                <p>You can do this, I believe in you</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </>
    )
};

export default About;