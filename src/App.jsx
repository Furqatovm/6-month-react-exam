import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Managers from './components/home'
import Admins from './components/admins'
import Teachers from './components/teachers'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/managers' element={<Managers />} />
      <Route path='/admins' element ={<Admins />} />
      <Route path='/teachers' element={<Teachers />} />
      </Route>
    </Routes>
  )
}

export default App