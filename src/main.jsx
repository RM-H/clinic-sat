import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Mainlayout  from './Layout/Mainlayout.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Landing,Contact,SingleBlog,Blogs,Notfound} from './pages/index.js'
import {getSplash} from "./Services/services.js";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,



        children:[
            {
                path:'/',
                element:<Landing/>
            } ,
            {
                path:'/contact/',
                element:<Contact/>
            }
            ,
            {
                path:'/blogs/',
                element:<Blogs/>
            }
            ,
            {
                path:'/blogs/:blogID',
                element:<SingleBlog/>
            } ,
            {
                path: '/*',
                element: <Notfound/>
            }

        ]
    },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Mainlayout/>
        </RouterProvider>










    </React.StrictMode>,
)