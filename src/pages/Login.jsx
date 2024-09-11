import "./Login.css"
import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store"
import UserDAO from "../daos/UserDAO.js"

export default function Login(){

    const {user, logout, loginGoogleWithPopUp, observeAuthState, loading} = useAuthStore()
    const navigate = useNavigate();

    useEffect(()=>{
        observeAuthState()
    },[observeAuthState])

    useEffect(() => {
        if (user) {
            const newUser = {
                email: user.email,
                displayName: user.displayName,
                photoUrl: user.photoURL,
            };
            UserDAO.createUser(newUser);
            console.log(newUser)
        }
    }, [user]);

    const handleLogin = useCallback(()=>{
        loginGoogleWithPopUp()
    }, [loginGoogleWithPopUp])

    console.log(user);

    const handleLogout = useCallback(() => {
        logout();
    }, [logout]);

    const handleContinue = useCallback(() => {
      navigate('/figure')
    }, [navigate]);

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
          <button className="button-continue" onClick={handleContinue}>
            Continuar
          </button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
    )
};