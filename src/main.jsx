import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import RoutesProject from './pages/RoutesProject.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesProject />
  </StrictMode>
);
