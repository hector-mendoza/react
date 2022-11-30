import { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es";

const MyPage = () => {

    // Theme State
    const [theme, setTheme] = useState(initialTheme);

    // Language State
    const [language, setLanguage] = useState(initialLanguage);

    // function to handle the Theme change
    const handleTheme = (e) => {
        console.log(e.target.value);
        if (e.target.value === "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <div className={`my-page ${theme}`}>
            <Header theme={theme} handleTheme={handleTheme} />
            <Main theme={theme} />
            <Footer theme={theme} />
        </div>
    );
}

export default MyPage;