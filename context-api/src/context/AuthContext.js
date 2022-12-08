import { createContext, useState } from "react";

const AuthContext = createContext();
const initialAuth = false;

const AuthProvider = ({ children }) => {
    // Session State
    const [auth, setAuth] = useState(initialAuth);

    // function to handle the "Auth"
    const handleAuth = (e) => {
        if (auth) {
            setAuth(false);
        } else {
            setAuth(true);
        }
    };

    const data = { auth, handleAuth };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };
export default AuthContext;