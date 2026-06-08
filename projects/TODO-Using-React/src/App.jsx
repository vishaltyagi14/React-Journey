import { useContext } from 'react'
import './App.css'
import { ContextProvider, OnlyContext } from './Context/ContextApi'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const { todos, addTODO, updateTODO, deleteTODO, completedTODO } = useContext(OnlyContext);

  return (
    <div className="bg-[#172842] text-white min-h-screen py-8">
      <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage your TODOs</h1>
      <div className='mb-4'>
        {/* Todo Form */}
        <TodoForm/>
      </div>
      <div className='flex flex-wrap gap-y-3'>
        {/* Loop and add Todo */}
        {todos.map((todo)=>(
          <div className='w-full' key={todo.id}>
            <TodoItem/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Root() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}