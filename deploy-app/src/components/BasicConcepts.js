// por comodidad se le asigna el alias de Router
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

// import every page/component
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Nav from "./Nav";
import User from "../pages/User";
import Products from "../pages/Products";
import ReactTopics from "../pages/ReactTopics";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";


// SWITCH was replaced by ROUTES
const BasicConcepts = () => {
    return (
        <>
            {/* HashRouter */}
            {/* It's very easy to use and functional when you don't have a server side rendering for changing URL routes */}
            {/* https://dominio.com/#/recursoABuscar */}
            <h2>Hash Router</h2>
            <HashRouter>
                <nav>
                    {/* on Hash Router you don't need to type the "#", it will get auto-added */}
                    <Nav />
                </nav>

                {/* Routes inside a HashRouter so the navigation works */}
                <Routes>
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

                    {/* Private Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />

                    <Route path="*" element={<Error404 />} />

                </Routes>
            </HashRouter>
        </>
    );
};

export default BasicConcepts;