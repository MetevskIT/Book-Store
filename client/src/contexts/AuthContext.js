import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import userService from '../services/userService'

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };
      
    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{
            user: auth,
            userLogin,
            userLogout,
            isAuthenticated: !!auth.accessToken,
            isAdmin:!!auth.role=="Admin"
        }}>
            {children}
        </AuthContext.Provider>  
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
