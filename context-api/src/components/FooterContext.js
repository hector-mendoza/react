import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const FooterContext = ({ texts }) => {

    // destructuring the values of the context
    // ThemeContext is what it creates the Context
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
        </footer>
    );
}

export default FooterContext;