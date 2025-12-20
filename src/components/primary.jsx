import React, { useEffect, useState } from 'react'
import { apiRequest } from '../useAxios/axios';
import { Spin } from 'antd';

const Primary = () => {
    const [data, setData] =useState([]);
    const [loading, setLoading] =useState(false);
    useEffect(()=>{
        const getData = async () => {
            setLoading(true)
            const result = await apiRequest({
              url: `https://${import.meta.env.VITE_BASE_URL}/api/staff/all-managers`,
            });
            setData(result?.data)
            setLoading(false)
        };

        getData();
    },[])

    console.log(data)
 






  return (
    <div>
        <div className="overflow-x-auto">
      <div className="min-w-full bg-white shadow rounded-lg">
        <div className="p-4 ">
          <h2 className="text-lg font-semibold">Foydalanuvchilar ro'yxati</h2>
        </div>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Ism</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Familiya</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Rol</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-800">Holat</th>
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
                
                data?.map((val) =>{
                    return <tr key={val.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{val.first_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{val.last_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{val.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{val.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{val.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-gray-500 hover:text-gray-700">•••</button>
                    </td>
                  </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Primary