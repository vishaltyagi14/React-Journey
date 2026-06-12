import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Product from './Components/Product.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import Company from './Components/Nested/Company.jsx'
import Business from './Components/Nested/Business.jsx'
import Others from './Components/Nested/Others.jsx'

const router=createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children: [
    {
      path: "",
      element: <Login/>
    },
    {
      path: "home",
      element: (<ProtectedRoute>
        <Home></Home>
      </ProtectedRoute>),
      children: [
        {
          path: 'company',
          element: <Company></Company>
        },
        {
          path: 'business',
          element: <Business></Business>
        },
        {
          path: 'others',
          element: <Others></Others>
        }
      ]
    },
    {
      path: "product",
      element: (<ProtectedRoute>
        <Product></Product>
      </ProtectedRoute>)
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
