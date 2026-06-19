import { useState } from 'react'
import './App.css'
import useDebounce from './Hooks/useDebounce'
import getWindowSize from './Hooks/getWindowSize'
import useLocalStorage from './Hooks/useLocalStorage'
import useFetch from './Hooks/useFetch'

function App() {
const [search, setSearch] = useState("")
const debounceSearch = useDebounce(search,500)
const {width,height}= getWindowSize()

const {loading ,data, error}= useFetch("https://jsonplaceholder.typicode.com/users")


const [name,setName]= useLocalStorage("name","")


  return (
    <>
      <div>
        <h2>Search </h2>
        <input type="search" value={search}  onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      <h1>{debounceSearch}</h1>
      <div>
        <h1>Window Size : {width} X {height}</h1>
      </div>

      <div>
        <h1>UseLocalStorage Hook below</h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>

        <h2>{name}</h2>
      </div>


      <div>
        
        {error &&
          <h1>{error}</h1>
        }

        <h1>User list: </h1>
        {loading &&
          <h1>Loading...</h1>
        }
        <ul>
          {data.map((user)=>{
          return (<li key={user.id}>
            {user.name}
            </li>)
        })}
        </ul>
      </div>
    </>
  )
}

export default App
