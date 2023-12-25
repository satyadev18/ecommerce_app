import React from 'react'
import { isAuthenticated } from '../utils/helpers/helpers'
import { Outlet } from 'react-router-dom'

import LoginComponent from '../features/auth/components/login/login'

const ProtectedRoutes = () => {

  return (
    isAuthenticated() ? <Outlet/> :<LoginComponent/>
  )
}

export default ProtectedRoutes