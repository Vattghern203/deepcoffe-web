import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { Router } from './components/molecules/Router/Router'

import "./assets/css/main.css"

function App() {

  return (
    <>
      <ThemeProvider >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
