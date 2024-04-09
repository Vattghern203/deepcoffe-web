import './App.css'

import Nav from '@/components/organisms/Nav/Nav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, News } from '@/pages'

function App() {

  /* const pageLinks = [
    {
      name: 'home',
      url: '/'
    },

    {
      name: 'notícias',
      url: '/news'
    },

    {
      name: 'dashboard',
      url: '/dashboard'
    },

    {
      name: 'sobre',
      url: '/about'
    }
  ] */

  return (
    <>
      <Router>
        <Nav />
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
