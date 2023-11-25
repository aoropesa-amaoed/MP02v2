
import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Upload from './pages/Upload';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <GoogleOAuthProvider clientId={`${import.meta.env.VITE_APP_GOOGLE_API_TOKEN}`}>
      <div className='xl:w-[1200px] m-auto overflow-hidden'>
        <NavBar/>
        <div className='flex justify-start gap-6 md:gap-20 h-[92vh] overflow-hidden xl:hover:overflow-auto'>
        <SideBar/>
        <Home/>
        </div>
        </div>
        </GoogleOAuthProvider>   
      </>
    )
  },
  {
    path: "/Upload",
    element: (
      <Upload/>
    )
  }
]);


function App() {
  
  return (

    <RouterProvider router={router} />

  )
}

export default App