import './App.css'

import News from '@/components/templates/News'

function App() {
  

  return (
    <>
      <main>
        <News.Root heading='Lorem Ipsum'>
          <News.Article />
          <News.Article  />
        </News.Root>
      </main>
    </>
  )
}

export default App
