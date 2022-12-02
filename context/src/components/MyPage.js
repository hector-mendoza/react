import { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es";

const translations = {
    es: {
        headerTitle: "Mi aplicacion SIN Context API",
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
            headerTitle: "My application WITHOUT Context API",
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

const MyPage = () => {

    // Theme State
    const [theme, setTheme] = useState(initialTheme);

    // Language State
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    // Session State
    const [auth, setAuth] = useState(initialAuth);

    // function to handle the Theme change
    const handleTheme = (e) => {
        // console.log(e.target.value);
        if (e.target.value === "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

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

    return (
        <div className={`my-page ${theme}`}>
            <Header theme={theme} 
            handleTheme={handleTheme} 
            handleLanguage={handleLanguage} 
            texts={texts} 
            auth={auth}
            handleAuth={handleAuth}
            />
            <Main theme={theme} texts={texts} auth={auth}/>
            <Footer theme={theme} texts={texts}/>
        </div>
    );
}

export default MyPage;