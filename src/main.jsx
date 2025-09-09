import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Route/Routes'
import AuthProvider from './Authentication/AuthProvider'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <ToastContainer></ToastContainer>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
)
