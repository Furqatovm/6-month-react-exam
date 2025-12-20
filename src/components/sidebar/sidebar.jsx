import React from 'react'
import { AiOutlineHome,AiOutlineUserAdd  } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom'
import { IoBookOutline } from "react-icons/io5";;
import { BsPeople } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";




const Sidebar = () => {
  return (
    <div className='px-6 py-3'>
        <h1 className='text-[oklch(.216 .006 56.043)] mb-6 font-bold'>Admin CRM</h1>
        <h2 className='text-[oklch(.216 .006 56.043)] my-3 font-semibold'>Menu</h2>
        <div className='flex flex-col gap-2'>
            <NavLink to="/" end  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <AiOutlineHome className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Asosiy</span>
            </NavLink>
            <NavLink to={"/managers"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <AiOutlineUserAdd className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Menegerlar</span>
            </NavLink>

            <NavLink to={"/admins"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <AiOutlineUserAdd className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Adminlar</span>
            </NavLink>

            <NavLink to={"/teachers"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <BsPersonWorkspace className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Ustozlar</span>
            </NavLink>
            <NavLink to={"/students"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <IoPerson  className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Studentlar</span>
            </NavLink>
            <NavLink to={"/groups"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <BsPeople  className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Guruhlar</span>
            </NavLink>
            <NavLink to={"/courses"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <IoBookOutline  className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Kurslar</span>
            </NavLink>
            <NavLink to={"/payment"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <FaMoneyBill  className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>To'lovlar</span>
            </NavLink>
        </div>
    <h2 className='font-semibold py-6'>Boshqalar</h2>
        <div className='flex flex-col gap-2'>
        <NavLink to={"/settings"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <LuSettings  className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Sozlamalar</span>
            </NavLink>
            <NavLink to={"/profile"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <CgProfile  className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Profile</span>
            </NavLink>
            <NavLink to={"/log-out"}  className={({isActive}) =>{return `py-2 px-2 hover:border-gray-500 border flex gap-4 items-center rounded-lg ${isActive ? "border-gray-500":"border-transparent"}`}}>
                <LuLogOut  className='text-[oklch(.216 .006 56.043)] text-[22px]' />
                <span className='text-[oklch(.216 .006 56.043)]'>Chiqish</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar