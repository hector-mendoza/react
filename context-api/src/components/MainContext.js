import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const MainContext = ({ texts, auth }) => {

    // destructuring the values of the context
    // ThemeContext is what it creates the Context
    const { theme } = useContext(ThemeContext);
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