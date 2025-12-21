import React, { useEffect, useState } from 'react'
import { apiRequest } from '../useAxios/axios';
import { Card, Spin } from 'antd';

const Courses = () => {
  const [data, setData] =useState([]);
  const [loading, setLoading] =useState(false);
  const [menu, setMenu] = useState(true);
  const [panel, setPanel] = useState(false);
  useEffect(()=>{
      const getData = async () => {
          setLoading(true)
          const result = await apiRequest({
            url: `https://${import.meta.env.VITE_BASE_URL}/api/course/get-courses`,
          });
          setData(result?.data)
          setLoading(false)
      };

      getData();
  },[])

  console.log(data)

  return (
    <div className='flex gap-8'>
     {
      data?.length >0 ?
      data?.map((val) =>{
        return   <div key={val._id} className="max-w-sm bg-white shadow rounded-lg m-5 w-[40%] p-8">
        {/* Title and Price */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{val.name.name}</h3>
          <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
            {val.price.toLocaleString()}
          </span>
        </div>
  
        {/* Subtitle */}
        <p className="text-gray-500 mb-4">{val.description}</p>
  
        {/* Info Section */}
        <div className="flex gap-4 mb-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
            </svg>
            <span>{val.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>15 students</span>
          </div>
        </div>
  
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded text-gray-700 hover:bg-gray-100">
            Edit
          </button>
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
            O'chirish
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Muzlatish
          </button>
        </div>
      </div>
       }):
       <Spin />
     }
    </div>
  )
}

export default Courses