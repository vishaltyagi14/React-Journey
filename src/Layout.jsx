import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import { Suspense } from 'react'
import loader from "./assets/loading.gif"

const Layout = () => {
  return (
    <>
    <Header></Header>
    <Suspense fallback={<img style={{ position: "fixed", zIndex: 1000,height: 100,width: 100,top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"}} src={loader}></img>}>
      <Outlet></Outlet>
    </Suspense>
    </>
  )
}

export default Layout