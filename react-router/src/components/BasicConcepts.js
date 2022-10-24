// por comodidad se le asigna el alias de Router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import every page/component
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Nav from "./Nav";
import User from "../pages/User";
import Products from "../pages/Products";
import ReactTopics from "../pages/ReactTopics";

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
                        <Route path="/products" element={<Products />} />

                        {/* Friendly URL */}
                        <Route path="/user/:username/:age" element={<User />} />

                        {/* Redirections */}
                        <Route path="/acerca" element={<Navigate to="/about" />} />
                        <Route path="/contacto" element={<Navigate to="/contact" />} />

                        {/* Rutas Anidadas/Nested Routes */}
                        {/* Route to every React topic (*) */}
                        <Route path="/react/*" element={<ReactTopics />} />

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