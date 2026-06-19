import React, { lazy, useState,Suspense } from 'react'
import loader from "../assets/loading.gif"
import ErrorBoundary from '../Error/ErrorBoundary.jsx'
const AdminData = lazy(()=>import('./AdminData.jsx').then((module)=>({default: module.AdminData})))

const Home = () => {
  const [admin, setAdmin] = useState(false)
  return (
    <>
    <button onClick={()=>{
      import("../sum.js").then(mod=>{
        alert(mod.sum(2,2))
      })
    }}>Add 2+2</button>
    <br/>
    <button onClick={()=>setAdmin((prev)=>!prev)}>Toggle Admin</button>
    <Suspense fallback={<img style={{ position: "fixed", zIndex: 1000,height: 100,width: 100,top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"}} src={loader}></img>}>
      {admin?<ErrorBoundary fallback="Error "><AdminData/></ErrorBoundary>:<h1>You are not the Admin</h1>}
    </Suspense>
    </>
  )
}



export default Home