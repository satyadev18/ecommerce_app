import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationComponent from '../features/auth/components/register/register'
import LoginComponent from '../features/auth/components/login/login'
import { get } from 'http'

const UnprotectedRoutes = () => {

  
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/register' element={<RegistrationComponent/>}/>
            <Route path='/login' element={<LoginComponent/>}/>
            </Routes></BrowserRouter>
    </div>
  )
}

export default UnprotectedRoutes