import React from 'react'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'

import {createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';

import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Home from "./pages/home/Home";
import Profile from './pages/profile/Profile';
import Add from "./pages/add/Add"

const App = () => {
   const {currentUser}=useContext(AuthContext) ;


    const Layout=()=>{

      return(

       <div>

         <Navbar/>
         <Hero/>

       </div>


      )


    }
    const ProtectedRoute=({children})=>
    {

      if(!currentUser){
       return <Navigate to="/login" />;
      }
      return children ;
    }
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:(
        <ProtectedRoute>
          <Layout/>
          </ProtectedRoute>
      ),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/add",
      element:<Add/>
    }
  ])
  return (
    <div>
          <RouterProvider  router={router}/>


          
    </div>
  )
}

export default App
