import React, { useState ,useContext} from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {user, setUser} = useContext(UserContext)
  const handleSubmit =(e)=>{
    e.preventDefault();
    setUser({username, password})

  }
  return (
    <>
      <h2>This is Login Page</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
