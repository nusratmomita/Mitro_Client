import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Route/Routes'


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
