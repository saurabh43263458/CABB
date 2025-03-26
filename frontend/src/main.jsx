import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import UserDataProvider from './ContextApi/userContextapi.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserDataProvider>
  </StrictMode>,
)
