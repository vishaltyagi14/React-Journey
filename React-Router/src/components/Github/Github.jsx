import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/vishaltyagi14")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
  return (
    <>
    <div className='p-4 bg-blue-500 text-center text-4xl text-white'>Github Followers: {data.followers}
    </div>
     <img src={data.avatar_url} alt="" />
     </>
  )
}

export default Github