import { createContext, useEffect, useState } from "react";

export const OnlyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn DSA", completed: false }
  ]);

  const addTODO = (title) => {
    setTodos((prev) => [{ id: Date.now(), title, completed: false }, ...prev]);
  };

  const updateTODO = (id, title) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };

  const deleteTODO = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completedTODO = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(()=>{
    const allTodos=JSON.parse(localStorage.getItem("todos"))
    if(allTodos && allTodos.length>0){
        setTodos(allTodos)
    }
  },[])

  useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <OnlyContext.Provider value={{ todos, addTODO, updateTODO, deleteTODO, completedTODO }}>
      {children}
    </OnlyContext.Provider>
  );
};