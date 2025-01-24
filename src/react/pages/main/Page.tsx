import { useState } from 'react'
import Home from './Home'
import './Page.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import DebatePage from './DebatePage';
import { DataContext } from './DataContext';

function Page() {
  let [data, setData] = useState([] as string[]);
  
  return (
    <DataContext.Provider value={[data, setData]}>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/debate' element={<DebatePage />} />
        </Routes>
      </HashRouter>
    </DataContext.Provider>
  )
}

export default Page
