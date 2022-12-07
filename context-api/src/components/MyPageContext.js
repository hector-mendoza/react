import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import Wrapper from "./Wrapper";


const MyPageContext = () => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Wrapper />
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default MyPageContext;