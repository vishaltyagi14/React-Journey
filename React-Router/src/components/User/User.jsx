import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params= useParams();
    
  return (
    <div className='p-4 bg-blue-500 text-center text-4xl text-white'>User: {params.user_id}
   
    </div>
  )
}

export default User