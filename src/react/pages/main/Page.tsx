import Home from './Home'
import './Page.css'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
