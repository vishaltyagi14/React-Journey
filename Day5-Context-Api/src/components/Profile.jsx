import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext)

  if(!user) return <div>Please Login</div>
  else return (
    <>
    <h1>Welcome {user.username}</h1>
      <h1>By Vishal</h1>
    </>
  )
}

export default Profile
