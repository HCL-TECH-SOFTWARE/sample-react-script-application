import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Posts from './Pages/Posts.jsx'
import About from './Pages/About.jsx'

const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </main>
)

export default Main