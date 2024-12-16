import "./Login.css"
import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store"
import UserDAO from "../daos/UserDAO.js"
import Button_Logout from "./components/Button_Logout.jsx";
import Button_Home from "./components/Button_Home.jsx";


export default function Login() {

  const { user, logout, loginGoogleWithPopUp, observeAuthState, loading } = useAuthStore()
  const navigate = useNavigate();

  useEffect(() => {
    observeAuthState()
  }, [observeAuthState])

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        displayName: user.displayName,
        photoUrl: user.photoURL,
      };
      UserDAO.createUser(newUser);
    }
  }, [user]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp()
  }, [loginGoogleWithPopUp])

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleContinue = useCallback(() => {
    navigate('/home')
  }, [navigate]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  };

  return (
    <div className="container-login">
      {user ? (
        <>
          <p className="welcome-text">Bienvenido, {user.displayName}</p>
          <div style={{ marginBottom: '10px' }} onClick={handleContinue}>
            <Button_Home text="Página Principal" />
          </div>
          <div onClick={handleLogout}>
            <Button_Logout />
          </div>
        </>
      ) : (
        <div onClick={handleLogin}>
          <Button_Home text="Iniciar Sesión" />
        </div>
      )}
    </div>
  )
};