import React from 'react'
import { useState ,useContext} from 'react'
import { OnlyContext } from '../Context/ContextApi'

function TodoForm() {
    const [title, setTitle] = useState("")
   const {addTODO} =useContext(OnlyContext)

    const add =(e)=>{
        e.preventDefault();
        if(!title) return
        addTODO(title)
        setTitle("")
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

