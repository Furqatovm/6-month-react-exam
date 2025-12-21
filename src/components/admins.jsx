import React, { useEffect, useState } from 'react'
import { apiRequest } from '../useAxios/axios';
import Search from 'antd/es/input/Search';
import { Alert, Button, Dropdown, Menu, Select, Skeleton, Spin } from 'antd';
import toast from 'react-hot-toast';
import useDebounce from './usedebounce';


const Admins = () => {
 const [inputValue, setInputValue] =useState("");
  const [data, setData] =useState([]);
  const [loading, setLoading] =useState(false);
  const [paramValue, setParamValue] =useState("");
  
  const debouncedParam =useDebounce(paramValue, 500)
  useEffect(()=>{
      const getData = async () => {
          setLoading(true)
          const result = await apiRequest({
            url: `https://${import.meta.env.VITE_BASE_URL}/api/staff/all-admins`,
            params:{
              status: debouncedParam,
            }
          });
          setData(result?.data)
          setLoading(false)
      };

      getData();
  },[debouncedParam])


  const filteredData =data?.filter((val) =>val.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||val.last_name.toLowerCase().includes(inputValue.toLocaleLowerCase()))
console.log(filteredData)

  return (
    <div>
    <div className="relative">
  <div className="min-w-full bg-white shadow rounded-lg">
    <div className="p-4 flex items-center justify-between ">
      <h2 className="text-lg font-semibold">Foydalanuvchilar ro'yxati</h2>
      <div className='flex gap-4 items-center relative max-h-10'>
        <Search value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <Search value={paramValue} onChange={(e) =>setParamValue(e.target.value)} />
      </div>
    </div>
    <table className="w-full divide-y divide-gray-300">
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
            
             filteredData?.length > 0? filteredData.map((val) =>{
                return <tr key={val._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{val.first_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{val.last_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{val.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{val.role}</td>
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
</div>)
}

export default Admins