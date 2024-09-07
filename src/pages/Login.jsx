import "./Login.css"
import { useCallback, useEffect } from "react"
import useAuthStore from "../stores/use-auth-store"

export default function Login(){

    const {user, loginGoogleWithPopUp, observeAuthState} = useAuthStore()
    
    useEffect(()=>{
        observeAuthState()
    },[observeAuthState])

    const handleLogin = useCallback(()=>{
        loginGoogleWithPopUp()
    }, [loginGoogleWithPopUp])

    console.log(user);

    {/*const handleLogout = useCallback(() => {
        logout();
    }, [logout]);

    if (loading) {
        return <p className="loading-text">Cargando...</p>;
    }*/}


    return (
    <div className="container-login">
      {user ? (
        <>
          <p className="welcome-text">Bienvenido, {user.displayName}</p>
          {/*<button className="button-logout" onClick={handleLogout}>
            Cerrar sesión
          </button>*/}
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
    )
}