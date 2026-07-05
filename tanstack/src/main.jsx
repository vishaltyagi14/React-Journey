import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import App from './App.jsx'

const reactQuery= new QueryClient()
{/*new react query instance*/}

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* we have to import query client provider and provide client the new instance of reactQuery that has been created */}
    <QueryClientProvider client={
      reactQuery
    }>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
