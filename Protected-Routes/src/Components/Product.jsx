import React, { lazy, Suspense, useState } from 'react'
const User = lazy(()=>import('./User'))

const Product = () => {
  const [load, setLoad] = useState(false)
  return (
    <>
    <h1>Click Button Below to Load all Products</h1>
    {
      load?<Suspense fallback={<h3><i>loading...</i></h3>}><User/></Suspense>:null
    }
    <button onClick={()=>setLoad(true)}>Load Products</button>
    </>
  )
}

export default Product