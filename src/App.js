/** @format */

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import BlogPage from './pages/BlogPage/BlogPage'

import './App.css'
import NavBar from './component/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blogpage" element={<BlogPage />}></Route>
      </Routes>
    </>
  )
}

export default App
