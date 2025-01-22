import Home from './Home'
import './Page.css'
import { HashRouter, Route, Routes } from 'react-router-dom'

function Page() {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default Page
