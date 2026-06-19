import './App.css'
import { ContextProvider } from './Context/ContextP'
import Counter from './component/Counter'

function App() {

  return (
    <ContextProvider>
    <Counter></Counter>
    </ContextProvider>
  )
}

export default App
