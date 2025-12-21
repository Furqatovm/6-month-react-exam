import React, { useEffect, useState } from 'react'
import { apiRequest } from '../useAxios/axios';
import Search from 'antd/es/input/Search';
import { Spin } from 'antd';


const Groups = () => {
  const [data, setData] =useState([]);
  const [loading, setLoading] =useState(false);
  
  useEffect(()=>{
      const getData = async () => {
          setLoading(true)
          const result = await apiRequest({
            url: `https://${import.meta.env.VITE_BASE_URL}/api/group/get-all-group`,
          });
          setData(result.data)
          setLoading(false);
          console.log(result.data)
      };

      getData();
  },[]);

  function formatDateTime(isoString) {
    const date = new Date(isoString);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 0–based, shuning uchun +1
    const day = String(date.getDate()).padStart(2, "0");
  
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }


  return (
    <div>
    <div className="relative">
  <div className="min-w-full bg-white shadow rounded-lg">
    <div className="p-4 flex items-center justify-between ">
      <h2 className="text-lg font-semibold">Foydalanuvchilar ro'yxati</h2>
      <div className='flex gap-4 items-center relative max-h-10'>
      </div>
    </div>
    <table className="w-full divide-y divide-gray-300">
      <thead className="">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Guruh Nomi</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Ustoz</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">O'quvchilar Soni</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Boshlanish sanasi</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Tugash Sanasi</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Amallar</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {
            loading ?
            <tr  className='flex items-center justify-center w-full h-full'>
                <td>
                <Spin />
                </td>
            </tr>
             :
            
             data?.length > 0? data.map((val) =>{
                return <tr key={val._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{val.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{val.teacher.first_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{val.students.length}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formatDateTime(val.createdAt)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formatDateTime(val.end_group)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{val.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-500 hover:text-gray-700">•••</button>
                </td>
              </tr>
            }): <tr>
              <td>Bunaqa ma'lumot topilmadi</td>
            </tr>
        }
      </tbody>
    </table>
  </div>
</div>
</div>
  )
}

export default Groups