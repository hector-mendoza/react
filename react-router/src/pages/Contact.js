import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <main>
                <h2>Welcome to the Contact Page!</h2>
                <p>You can do this, I believe in you</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
};

export default Contact;