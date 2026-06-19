import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <ul >
        <li><NavLink style={{textDecoration: "none"}} to="/">HomePage</NavLink></li>
        <li><NavLink style={{textDecoration: "none"}} to="about">About</NavLink></li>
        <li><NavLink style={{textDecoration: "none"}} to="contact">Contact</NavLink></li>
    </ul>
    </>
  )
}


export default Header