import React, { use, useState } from "react";
import "./form.css";

const SimpleForm = () => {
    const [title,setTitle]= useState('')
    const [body,setBody]= useState('')
    const [author,setAuthor]= useState('Patlu')
    const[isPending,setIsPending]= useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const obj ={title,body,author}
        console.log(obj)

        setIsPending(true)
        fetch("URL",{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("Submitting Form");
            setIsPending(false);
        })
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Post your Blog</h1>
        <div className="input">
          <label>Title: </label>
          <input type="text" 
          value={title}
          required
          onChange={(e)=> setTitle(e.target.value)}
          />
        </div>

        <div className="textArea">
          <label>Write your post: </label>
          <textarea
          value={body}
          required
          onChange={(e)=> setBody(e.target.value)}
          ></textarea>
        </div>

        <div className="author">
          <label>Author:</label>
          <select
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
          >
            <option value="Motu">Motu</option>
            <option value="Patlu">Patlu</option>
          </select>
        </div>

        {!isPending && <input type="submit"  
        value={"Post Blog"}
        />}
        {isPending && <input disabled type="submit"  
        value={"Adding Blog..."}
        />}
      </form>
    </>
  );
};

export default SimpleForm;
