// por comodidad se le asigna el alias de Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import every page/component
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Nav from "./Nav";

// SWITCH was replaced by ROUTES
const BasicConcepts = () => {
    return (
        <>
            <h2>Basic Concepts</h2>
            <div>
                <Router>
                    <Nav />
                    <Routes>
                        {/* index => indicates that this is the INDEX of the site */}
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />

                        {/* we always need to add the 404 route as the LAST ONE */}
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
};

// const BasicConcepts = () => {
//     return (
//         <>
//             <h2>Basic Concepts</h2>
//             <div>
//                 <Router>
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="about" element={<About />} />
//                         <Route path="contact" element={<Contact />} />
//                     </Routes>
//                 </Router>
//             </div>
//         </>
//     );
// };

export default BasicConcepts;