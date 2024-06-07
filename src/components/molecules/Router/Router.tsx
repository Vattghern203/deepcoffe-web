import { Routes, Route } from 'react-router-dom'

import { About, Dashboard, Home, Landing, News, NotFound } from '@/pages'
import { DefaultLayout } from '@/layouts'


export function Router() {

  return (

    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Landing />} />
        <Route path='/news' element={<News />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={ <Home />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
