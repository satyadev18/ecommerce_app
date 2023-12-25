import React from 'react'
import { isAuthenticated } from '../utils/helpers/helpers'
import { Navigate, Outlet } from 'react-router-dom'

const AuthGuard = () => {
  return (
    isAuthenticated() ? <Outlet/> :<Navigate to={'/login'}/>
  )
}

export default AuthGuard