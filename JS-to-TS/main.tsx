import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render( //show error so add ! after  ('root') 
  <StrictMode>
    <App />
  </StrictMode>,
)
