import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {
    localStorage.setItem('token','true')
  const isAuth = localStorage.getItem('token')
  return isAuth ? children: <Navigate to="/" replace></Navigate>
}

export default ProtectedRoute