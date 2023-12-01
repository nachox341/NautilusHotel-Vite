import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { renderRoutes } from './routes/Index'
import Header from './components/Header.jsx'

function App() {
  return (
    <body>
      <BrowserRouter>
        <Header />
        <Routes>
          { renderRoutes() }
        </Routes>
      </BrowserRouter>
    </body>
  )
}

export default App