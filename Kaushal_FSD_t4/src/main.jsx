import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Client from './Client.jsx'
import Pb469 from './Pb469.jsx'
import Pb471 from './Pb471.jsx'
import Pb480 from './Pb480.jsx'
import Pb481 from '../Pb481.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pb481/>
  </StrictMode>,
)
