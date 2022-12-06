import { ThemeProvider } from "../context/ThemeContext";
import Wrapper from "./Wrapper";


const MyPageContext = () => {



    return (
        <ThemeProvider>
            <Wrapper />
        </ThemeProvider>
    );
}

export default MyPageContext;