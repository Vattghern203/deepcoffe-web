import './App.css'

import { NavigationBar, linkListProps } from '@/components/organisms/NavigationBar/NavigationBart'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, News } from '@/pages'

function App() {

  const pageLinks = [
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
  ]

  return (
    <>
      <Router>
        <NavigationBar links={pageLinks}/>
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
