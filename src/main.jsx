import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutesProject from './pages/RoutesProject.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutesProject />
  </StrictMode>
);
