import React, { useEffect } from 'react'
import { get } from '../../../../utils/services/http'

const LoginComponent = () => {
  useEffect(() => {
   get('products/1')
    
  }, [])
  return (
    <div>LoginComponent</div>
  )
}

export default LoginComponent