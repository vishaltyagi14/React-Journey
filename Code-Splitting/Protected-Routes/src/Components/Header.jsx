import React from 'react'
import {Link} from 'react-router'

const Header = () => {
  return (
    <>
    <Link to ="home">Home</Link>
    <Link to ="product">Product</Link>
    <Link to ="/">Login</Link>
    </>
  )
}

export default Header