import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationComponent from '../features/auth/components/register/register'
import LoginComponent from '../features/auth/components/login/login'
import { get } from 'http'
import HomeComponent from '../features/home/components/home'

const UnprotectedRoutes = () => {

  
  return (
    
      <Routes>

         <Route path='/login' element={<LoginComponent/>}/>
            <Route path='/home' element={<HomeComponent/>}/>
      </Routes>
    
  )
}

export default UnprotectedRoutes