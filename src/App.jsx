import './App.css'
import Login from './pages/Login'
import World from './World'
import logo from './images/logo.png';
function App() {

  return (
    <>
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <World/>
      <Login />
    </>
  )
}

export default App
