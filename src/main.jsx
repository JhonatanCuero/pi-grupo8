import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Figure from './Figure.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Figure />
  </StrictMode>,
)
