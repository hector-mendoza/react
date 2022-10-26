import { Navigate } from "react-router-dom";

// Assign "Component" alias to component
const PrivateRoute = ({ component: Component }) => {

    // Simulate the Auth
    let auth;
    auth = true;
    // auth = null;
    // console.log(auth);

    return (
        // if auth is null redirect to the login page, otherwise load the component
        auth ? <Component /> : <Navigate to="/login" />
    );
}

export default PrivateRoute;