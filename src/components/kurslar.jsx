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
    <div>
      <Card>
        <div>
          <h1>Backend</h1>
        </div>
      </Card>
    </div>
  )
}

export default Courses