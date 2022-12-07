import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

const FooterContext = () => {

    // destructuring the values of the context
    // ThemeContext is what it creates the Context
    const { theme } = useContext(ThemeContext);
    const { texts } = useContext(LanguageContext);

    return (
        <footer className={theme}>
            <h4>{texts.footerTitle}</h4>
        </footer>
    );
}

export default FooterContext;