// por comodidad se le asigna el alias de Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// SWITCH was replaced by ROUTES
const BasicConcepts = () => {
    return (
        <Router>
            <div>
                <h2>Basic Concepts</h2>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

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

export default BasicConcepts;

