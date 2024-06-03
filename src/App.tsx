import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './context/theme-provider'
import { Router } from './components/molecules/Router/Router'

import "./assets/css/main.css"
import { ImageProvider } from './context/selected-image-provider'

function App() {

  return (
    <>
      <ThemeProvider >
        <ImageProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ImageProvider>
      </ThemeProvider>
    </>
  )
}

export default App
