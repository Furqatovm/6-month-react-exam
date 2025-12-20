import React from 'react'
import { RiHomeLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location =useLocation();
    const path =location.pathname.split('/')[1]
  return (
    <div className='py-2'>
        <div className='flex gap-2 items-center'>
            <RiHomeLine className='text-[22px]' />
            <span>{
                path ? `Asosiy > ${path}`: "Asosiy"
                }</span>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Header