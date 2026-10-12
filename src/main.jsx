import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { setlocalStorage } from './utils/localStorage'
import AuthProvider from './context/AuthProvider.jsx'

//  localStorage.clear()
// setlocalStorage()


createRoot(document.getElementById('root')).render(
  
  
  <StrictMode>
    <AuthProvider>
       <App />
    </AuthProvider>


  </StrictMode>,
)
