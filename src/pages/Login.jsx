import "./Login.css"
import { useCallback, useEffect } from "react"
import useAuthStore from "../stores/use-auth-store"
import UserDAO from "../daos/UserDAO"

export default function Login(){

    const {user, logout, loginGoogleWithPopUp, observeAuthState, loading} = useAuthStore()
    
    useEffect(()=>{
        observeAuthState()
    },[observeAuthState])

    useEffect(() => {
        if (user) {
            const newUser = {
                email: user.email,
                displayName: user.displayname,
                photoUrl: user.photoURL,
            };
            UserDAO.createUser(newUser);
        }
    }, [user]);

    const handleLogin = useCallback(()=>{
        loginGoogleWithPopUp()
    }, [loginGoogleWithPopUp])

    console.log(user);

    const handleLogout = useCallback(() => {
        logout();
    }, [logout]);

    if (loading) {
        return <p className="loading-text">Cargando...</p>;
    };

    return (
    <div className="container-login">
      {user ? (
        <>
          <p className="welcome-text">Bienvenido, {user.displayName}</p>
          <button className="button-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
    )
};