import './App.css'

import Navbar from "@/components/templates/NavBar/NavBar"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, News } from '@/pages'

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </Router>
      <main>
      </main>
    </>
  )
}

export default App
