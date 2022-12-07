import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

const MainContext = ({ auth }) => {

    // destructuring the values of the context
    // ThemeContext is what it creates the Context
    const { theme } = useContext(ThemeContext);
    const { texts } = useContext(LanguageContext);
    return (
        <main className={theme}>
            <p>
                {
                    auth ? texts.mainWelcome : texts.mainHello
                }
            </p>
            <p>{texts.mainContent}</p>
        </main>
    );
}

export default MainContext;