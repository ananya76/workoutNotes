import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { useAuthContext } from './hooks/useAuthContext'

//Pages and components
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Navbar from './components/Navbar'

const App = () => {

  const {user} = useAuthContext()

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route
            path = "/"
            element = {user ? <Home/> : <Navigate to = "/login"/>}
          />
          <Route
            path = "/login"
            element = {!user ? <Login/> : <Navigate to = "/"/>}
          />
          <Route
            path = "/signup"
            element = { !user ? <Signup/> : <Navigate to = "/login"/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App