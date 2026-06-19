import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='relative z-[1]'>
        <button className='cursor-pointer' onClick={()=>setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>
      <div className='bg-amber-300 relative z-[2] p-10'>Other Content</div>
    </>
  )
}

export default App
