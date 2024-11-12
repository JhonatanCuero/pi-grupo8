import './App.css'
import Login from './Login'
import World from './components/World'
import logo from '../images/logo.png';
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
