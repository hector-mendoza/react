import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const initialAuth = false;

const Wrapper = () => {

    // Session State
    const [auth, setAuth] = useState(initialAuth);

    // function to handle the "Auth"
    const handleAuth = (e) => {
        if (auth) {
            setAuth(false);
        } else {
            setAuth(true);
        }
    };

    // HOOK -> useContext(data)
    // destructuring the values of the context 
    // ThemeContext is what it creates the Context
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`my-page ${theme}`}>
            <HeaderContext
                auth={auth}
                handleAuth={handleAuth}
            />
            <MainContext auth={auth} />
            <FooterContext />
        </div>
    );
}

export default Wrapper;