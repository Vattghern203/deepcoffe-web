import { Routes, Route } from 'react-router-dom'

import { About, Dashboard, Home, News, NotFound } from '@/pages'
import { DefaultLayout } from '@/layouts'


export function Router() {

  return (

    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
