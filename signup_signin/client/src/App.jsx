import React from 'react'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'

import {createBrowserRouter,RouterProvider} from 'react-router-dom';


const App = () => {

  const router=createBrowserRouter([
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ])
  return (
    <div>
          <RouterProvider  router={router}/>


          
    </div>
  )
}

export default App
