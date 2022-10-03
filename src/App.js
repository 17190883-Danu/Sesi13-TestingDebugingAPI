import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePages from './pages/home'
import CommentsPages from './pages/comments'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/comments' element={<CommentsPages />} />
      </Routes>
    </>
  )
}

export default App