import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact-Us/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router=createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children: [
    {
      path: "",
      element: <Home></Home>
    },
    {
      path: "about",
      element: <About></About>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    },
    {
      path: 'user/:user_id',
      element: <User/>
    },
    {path: 'github',
      element: <Github></Github>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)