import React from 'react'
import ReactDOM from 'react-dom/client'
import Mainlayout  from './Layout/Mainlayout.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Landing,Contact,SingleBlog} from './pages/index.js'

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
                path:'/blogs/:blogID',
                element:<SingleBlog/>
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