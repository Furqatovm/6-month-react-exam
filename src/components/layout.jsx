import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/sidebar'

const Layout = () => {
  return (
    <div className='flex'>
        <div className='w-62.5 h-screen border-r border-gray-300 fixed'>
        <Sidebar />
        </div>
        <div className='flex-1 ml-62.5 p-6'>
        <Outlet  />
        </div>
    </div>
  )
}

export default Layout