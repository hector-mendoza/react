import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

const MainContext = () => {

    // destructuring the values of the context
    // ThemeContext is what it creates the Context
    const { theme } = useContext(ThemeContext);
    const { texts } = useContext(LanguageContext);
    const { auth } = useContext(AuthContext);

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