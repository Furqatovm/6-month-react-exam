import { Button, Card, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { MdOutlineDateRange } from "react-icons/md";
import EditProfileModal from './modal';
import { apiRequest } from '../useAxios/axios';


const Profile = () => {

  const [data, setData] =useState([]);
  const [loading, setLoading] =useState(false);
  const [open, setOpen] = useState(false);
  const [editValue, setEditValue] =useState("");
  const [family, setFamilyValue] =useState("");
    const user =JSON.parse(localStorage.getItem("user"));
  
      const EditData = async () => {
          setLoading(true)
          const result = await apiRequest({
            url: `https://${import.meta.env.VITE_BASE_URL}/api/auth/edit-profile`,
            method:"PUT",
            body:{
              first_name: editValue,
              last_name:family,
              email: user.email
            }
          });
          setData(result.data)
          setLoading(false);
          console.log(result.data)
      };



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
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        width={400}
        styles={{
          backdropFilter: "blur(6px)",
        }}
      >
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

        {/* bu yerga login yoki form qo‘yasan */}
       <form onSubmit={(e) =>{
        e.preventDefault()
       }}>
       <span className='my-1 block font-semibold text-[1rem]'>Ism</span>
        <Input value={editValue} onChange={(e) =>setEditValue(e.target.value)} />
       <span className='my-1 block font-semibold text-[1rem]'>Familya</span>
       <Input value={family} onChange={(e) => setFamilyValue(e.target.value)} />

       <div className='my-4 flex items-end justify-end'>
        <Button type='primary' className='bg-black!' onClick={() =>EditData()}>
          Save Changes
        </Button>
       </div>
        
       </form>
      </Modal>
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
          <Button type='primary' className='!bg-black' onClick={() =>{setOpen(true)}}>
            <span className='text-[1rem] '>O'zgartirish</span>
          </Button>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default Profile