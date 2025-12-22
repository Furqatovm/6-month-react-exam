import { Button, Card, Input } from 'antd';
import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDateRange } from "react-icons/md";


const Profile = () => {
    const user =JSON.parse(localStorage.getItem("user"));
    function formatDateTime(isoString) {
      const date = new Date(isoString);
    
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 0–based, shuning uchun +1
      const day = String(date.getDate()).padStart(2, "0");

    
      return `${year}-${month}-${day}`;
    }
  
    console.log(user)
  return (
    <div className='flex flex-col gap-8 p-4'>
      <Card> 
   <div className='flex justify-between items-center'>
   <div className='flex gap-4 items-center'>
        <CgProfile className='text-[5rem]' />
          {/* bu right tomon */}
          <div>
            <h1 className='font-bold text-[1.5rem]'>{`${user.first_name} ${user.last_name}`}</h1>
            <span className='text-[18px] font-medium'>{user.email}</span>

            <span className='flex gap-1 items-center font-medium'>
              {<MdOutlineDateRange />} Qo'shilgan:{formatDateTime(user.createdAt)}
            </span>
          </div>
          </div>
      <Button type='primary' danger>
        {user.role}
      </Button>

   </div>
      </Card>

      <Card className='text-[1rem]'>
      <div className='flex flex-col gap-8'>
      <form className='grid grid-cols-4 gap-2'>
          <h1 className='text-[1.3rem] font-semibold col-span-full'>Profil ma'lumotlari</h1>
          <p className='text-gray-700 text-[1rem] col-span-full'>Shaxsiy ma'lumotlaringizni yangilashingiz mumkin.</p>
          <div className='col-span-2'>
            <span className='my-1 block font-semibold text-[1rem]'>Ism</span>
            <Button className='w-full'>
              <span className='block text-left text-[1rem] w-full'>{user.first_name}</span>
            </Button>
          </div>

          <div className='col-span-2'>
            <span className='my-1 block font-semibold text-[1rem]'>Familya</span>
            <Button className='w-full'>
              <span className='block text-left text-[1rem] w-full'>{user.last_name}</span>
            </Button>
          </div>

          <div className='col-span-2'>
            <span className='my-1 block font-semibold text-[1rem]'>Email</span>
            <Button className='w-full'>
              <span className='block text-left text-[1rem] w-full'>{user.email}</span>
            </Button>
          </div>

          <div className='col-span-2'>
            <span className='my-1 block font-semibold text-[1rem]'>Rol</span>
            <Button className='w-full'>
              <span className='block text-left text-[1rem] w-full'>{user.role}</span>
            </Button>
          </div>
        </form>
        <div className='flex justify-end items-end gap-4'>
          <Button type='primary' className='!bg-black'>
            <span className='text-[1rem] '>Parolni o'zgartirish</span>
          </Button>
          <Button type='primary' className='!bg-black'>
            <span className='text-[1rem] '>O'zgartirish</span>
          </Button>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default Profile