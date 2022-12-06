import { createContext, useState } from "react";

// Every context has 2 objects ↘️
// ----------------------> Wrapper-Provider & Consumer
const ThemeContext = createContext();

const initialTheme = "light";

// Provider
const ThemeProvider = ({ children }) => {
    // Theme State
    const [theme, setTheme] = useState(initialTheme);

    // function to handle the Theme change
    const handleTheme = (e) => {
        // console.log(e.target.value);
        if (e.target.value === "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    // every data that we need on this context (state in this case) to share
    const data = { theme, handleTheme };
    return (
        <ThemeContext.Provider value={data}>
            {/* will wrap every children that needs this context */}
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeProvider };
export default ThemeContext;