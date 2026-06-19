import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
const Home=lazy(()=>wait(1000).then(()=>(import("./Components/Home.jsx"))))
const About = lazy(()=> import("./Components/About.jsx").then((module)=> ({ default: module.About})))
const Contact = lazy(()=> import("./Components/Contact.jsx"))

const router = createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children: [
    {
      path: '',
      element: <Home></Home>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    },
    {
      path: 'about',
      element: <About></About>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

function wait(time){
  return new Promise(resolve =>{
    setTimeout(resolve,time)
  })
}
