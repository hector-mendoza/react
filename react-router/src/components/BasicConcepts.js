// por comodidad se le asigna el alias de Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import every page/component
import About from "../pages/About";
import Contact from "../pages/Contact";

// SWITCH was replaced by ROUTES
const BasicConcepts = () => {
    return (
        <>
            <h2>Basic Concepts</h2>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        </>
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

export default BasicConcepts;