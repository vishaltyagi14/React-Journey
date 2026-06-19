import { useReducer } from "react"
import "./counter.css"
export const Counter =()=>{

    const reducer=(state,action)=>{
        if(action.type ==="Increment"){
            return state+1;
        }
        if(action.type ==="Decrement"){
            if(state>0)return state-1;
            return state
        }
    }
 const [counter, dispatch]=useReducer(reducer,0);

    return(
        <div className="mainDiv">
            <h1>{counter}</h1>
            <button style={{width: 100,height:50}} onClick={()=>dispatch({type:"Increment"})}>Increment</button>
            <button style={{width: 100,height:50}} onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        </div>
    )
}