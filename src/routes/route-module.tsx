import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthGuard from './auth-guard'
import CartComponent from '../features/cart/components/cart'
import ProfileComponent from '../features/profile/components/profile'
import LoginComponent from '../features/auth/components/login/login'
import HomeComponent from '../features/home/components/home'
import ProductListComponent from '../features/products/components/product-list/product-list'

const RouteModuleComponent = () => {
  return (
    <Router>
        <Routes>
            <Route element={<AuthGuard/>}>
                <Route path='/cart' element={<CartComponent/>}/>
                <Route path='/profile' element={<ProfileComponent/>}/>

            </Route>
            <Route path='/login' element={<LoginComponent/>}/>
            <Route path='/home' element={<HomeComponent/>}/>
            <Route path='/product' element={<ProductListComponent/>}/>
        </Routes>
    </Router>
  )
}

export default RouteModuleComponent