import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './User'
import Blog from './Blog'
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/User' element={<User />}></Route>
      </Routes>
    </div>

  )
}

export default App