import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Base from './styles/Base.js'
import Reset from './styles/Reset.js'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reset />
    <Base />
    <App />
  </StrictMode>,
)
