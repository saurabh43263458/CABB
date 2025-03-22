import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignUp from './pages/CaptainSignUP'
const App = () => {
  return (
  <div >
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignUp/>}/>
      </Routes>
  </div>
    
  )
}

export default App