import React, { useEffect, useState } from 'react'
import { apiRequest } from '../useAxios/axios';
import { Spin } from 'antd';

const Primary = () => {
    const [data, setData] =useState([]);
    const [loading, setLoading] =useState(false);
    const [menu, setMenu] = useState(true);
    const [panel, setPanel] = useState(false);
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
    <div className="flex min-h-screen">


      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Topbar */}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[
            { title: "Total views", value: "$3.456K", percent: "0.43%" },
            { title: "Total Profit", value: "$45.2K", percent: "4.35%" },
            { title: "Total Product", value: "2.450", percent: "2.95%" },
            { title: "Total Users", value: "3.456", percent: "0.95%" }
          ].map(card => (
            <div key={card.title} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-500">{card.title}</p>
              <p className="text-2xl font-bold mt-2">{card.value}</p>
              <p className="text-green-500">{card.percent}</p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-gray-700 mb-4">Total Revenue</h2>
            <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg">
              Chart Placeholder
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-gray-700 mb-4">Profit this week</h2>
            <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg">
              Chart Placeholder
            </div>
          </div>
        </div>

        {/* Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-gray-700 mb-4">Visitors Analytics</h3>
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg">Chart</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-gray-700 mb-4">Region labels</h3>
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg">Map</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-gray-700 mb-4">Recent Posts</h3>
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg">Feed</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Primary