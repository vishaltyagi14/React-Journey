import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from './api/api'
import PostLists from './components/post-lists'

const App = () => {
  return (
    <div>
      <PostLists/>
    </div>
  )
}

export default App