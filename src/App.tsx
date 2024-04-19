import Nav from '@/components/organisms/Nav/Nav'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'

import { About, Dashboard, Home, News } from '@/pages'


function App() {

  return (
    <>
    <ThemeProvider >
      <Router>
        <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
