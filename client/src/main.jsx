import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext.jsx'
import {GenderProvider} from './context/GenderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GenderProvider>
            <App />
          </GenderProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
