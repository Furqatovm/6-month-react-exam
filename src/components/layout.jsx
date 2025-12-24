import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/sidebar'
import Header from './top'

const Layout = () => {
  return (
    <div className='flex'>

        <div className='w-62.5 h-screen border-r border-gray-500 fixed'>
        <Sidebar />
        </div>
       <div className='flex-1 ml-62.5'>
        <div className=' py-2 px-4 border-b border-gray-500'>
          <Header />
        </div>
       <div className='py-2 px-3'>
        <Outlet  />
        </div>
       </div>
    </div>
  )
}

export default Layout
