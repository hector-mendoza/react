import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}

            {/* NavLinks*/}
            {/* we add the prop => end,  to ensure this component isn't matched as "active" when its descendant paths are matched. */}
            <NavLink to="/" end>Home</NavLink>

            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            {/* Send PARAMS by URL */}
            <div>
                <NavLink to="/user/hector/27">Params - Hector & 27</NavLink>
            </div>

            {/* QUERY PARAMS */}
            <div>
                <NavLink to="/products">Products</NavLink>
            </div>

            {/* Redirections */}
            <div>
                <span>Redirections: </span>
                <Link to="/acerca">Acerca de</Link>
                <Link to="/contacto">Contacto</Link>
            </div>

            {/* Rutas Anidadas/Nested Routes */}
            <div>
                <span>Rutas Anidadas/Nested Routes: </span>
                <Link to="/react">React</Link>
            </div>
        </nav>
    );
}

export default Nav;