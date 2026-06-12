import React from 'react'
import Header from "./Components/Header"

import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default Layout