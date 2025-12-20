import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Managers from './components/home'
import Admins from './components/admins'
import Teachers from './components/teachers'
import Students from './components/students'
import Groups from './components/groups'
import Courses from './components/kurslar'
import Payment from './components/payment'
import Settings from './components/setting'
import Profile from './components/profile'
import Logout from './components/logout'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/managers' element={<Managers />} />
      <Route path='/admins' element ={<Admins />} />
      <Route path='/teachers' element={<Teachers />} />
      <Route path='/students' element={<Students />} />
      <Route path='/groups' element={<Groups />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/log-out' element={<Logout />} />
      </Route>
    </Routes>
  )
}

export default App