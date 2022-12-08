import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

import Wrapper from "./Wrapper";

const MyPageContext = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <LanguageProvider>
                    <Wrapper />
                </LanguageProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default MyPageContext;