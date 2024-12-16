import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Particles from "react-particles"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './components/Navegador.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
