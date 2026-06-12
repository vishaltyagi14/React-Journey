import React from 'react'
import { Link, Outlet } from 'react-router'

const Home = () => {
  return (
    <>
    <div>Home</div>
    <ul>
      <li><Link to="company">Company</Link></li>
      <li><Link to="business">Business</Link></li>
      <li><Link to="others">Others</Link></li>
    </ul>
    <Outlet></Outlet>
    </>
  )
}

export default Home