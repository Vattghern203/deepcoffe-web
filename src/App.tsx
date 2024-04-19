import './App.css'

import Nav from '@/components/organisms/Nav/Nav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'

import { About, Dashboad, Home, News } from '@/pages'


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
    <ThemeProvider >
      <Router>
        <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/dashboard' element={<Dashboad />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
