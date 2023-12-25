import React from 'react'
import LoginComponent from './features/auth/components/login/login'
import RouteModuleComponent from './routes/route-module'
import { Provider } from 'react-redux'
import store from './mainstore/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>


      <RouteModuleComponent/>
      </Provider>
      
      </div>
  )
}

export default App