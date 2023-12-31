/** @format */
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import BlogPage from './pages/BlogPage/BlogPage'
import NavBar from './component/NavBar/NavBar'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blogpage" element={<BlogPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
