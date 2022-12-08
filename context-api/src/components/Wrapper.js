import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const Wrapper = () => {
    // HOOK -> useContext(data)
    // destructuring the values of the context 
    // ThemeContext is what it creates the Context
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`my-page ${theme}`}>
            <HeaderContext />
            <MainContext />
            <FooterContext />
        </div>
    );
}

export default Wrapper;