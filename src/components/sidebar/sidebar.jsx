import React from 'react'
import { AiOutlineHome,AiOutlineUserAdd  } from "react-icons/ai";

import { Link, NavLink } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='px-6'>
        <h1 className='text-[oklch(.216 .006 56.043)] mb-6 font-bold'>Admin CRM</h1>
        <h2 className='text-[oklch(.216 .006 56.043)] my-3 font-semibold'>Menu</h2>
        <div className='flex flex-col gap-2'>
            <NavLink to="/" end  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-6 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <AiOutlineHome className='text-[oklch(.216 .006 56.043)] text-[18px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Asosiy</span>
            </NavLink>
            <NavLink to={"/managers"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-6 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <AiOutlineUserAdd className='text-[oklch(.216 .006 56.043)] text-[18px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Menegerlar</span>
            </NavLink>

            <NavLink to={"/admins"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-6 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <AiOutlineUserAdd className='text-[oklch(.216 .006 56.043)] text-[18px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Adminlar</span>
            </NavLink>

            <NavLink to={"/teachers"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-6 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <AiOutlineUserAdd className='text-[oklch(.216 .006 56.043)] text-[18px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Adminlar</span>
            </NavLink>
            
        </div>
    </div>
  )
}

export default Sidebar