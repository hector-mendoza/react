import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const initialLanguage = "es";

const translations = {
    es: {
        headerTitle: "Mi aplicacion CON Context API",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenide Invitade",
        mainHello: "Hola usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en: {
        headerTitle: "My application WITH Context API",
        headerSubtitle: "My Header",
        headerLight: "Sure",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Close Session",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello user",
        mainContent: "My main content",
        footerTitle: "My footer"
    },
};

const initialAuth = false;

const Wrapper = () => {
    // Language State
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    // Session State
    const [auth, setAuth] = useState(initialAuth);

    // function to handle the Language change
    const handleLanguage = (e) => {
        console.log(e.target.value);
        if (e.target.value === "es") {
            setLanguage("es");
            setTexts(translations.es);
        } else {
            setLanguage("en");
            setTexts(translations.en);
        }
    };

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
                handleLanguage={handleLanguage}
                texts={texts}
                auth={auth}
                handleAuth={handleAuth}
            />
            <MainContext texts={texts} auth={auth} />
            <FooterContext texts={texts} />
        </div>
    );
}

export default Wrapper;