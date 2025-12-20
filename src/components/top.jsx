import React from 'react'
import { RiHomeLine } from "react-icons/ri";
import { NavLink, useLocation } from 'react-router-dom';
import { BsPeople } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    const user =JSON.parse(localStorage.getItem("user"));
    const location =useLocation();
    const path =location.pathname.split('/')[1]
  return (
    <NavLink to={"/profile"} className='py-1 flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <RiHomeLine className='text-[1.5rem]' />
            <span className='font-medium'>{
                path ? `Asosiy > ${path}`: "Asosiy"
                }</span>
        </div>

        <div className='flex gap-3 items-center'>
            <div className='flex flex-col items-end'>
                <span className='font-medium'>{user.first_name} {user.last_name}</span>
                <span className='flex gap-2 items-center font-medium'>
                    <BsPeople className='' />
                    <span className='text-[14px]'>{user.role}</span>
                </span>
            </div>
            <CgProfile className='text-[2.4rem]' />

        </div>
    </NavLink>
  )
}

export default Header