import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Route/Routes'
import AuthProvider from './Authentication/AuthProvider'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
      theme="light"
      className="my-custom-toast"
      progress={undefined}
    />
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
