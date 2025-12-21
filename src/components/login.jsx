import React, { useState } from 'react'
import { apiRequest } from '../useAxios/axios';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Login = ({setAppToken}) => {
    const [token, setToken] = useState(null);
    const [message, setMessage] = useState("");
    const [inputValue, setinputValue] =useState("");
    const [password, setPassword] =useState('');
    const [redirect, setRedirect] =useState(false);
    const [loading, setLoading] =useState(false);
  
    const handleLogin = async () => {
      setLoading(true)
      const result = await apiRequest({
        url: `https://${import.meta.env.VITE_BASE_URL}/api/auth/sign-in`,
        method: "POST",
        body: { email: inputValue, password: password },
      });

      console.log(result)
      setLoading(false)


      if(result.message !=="succses"){
        toast.error(`Xatolik yuz berdi ${result.message}`)
        return
      } else{
        toast.success("Muvaffaqiyatli tizimga kirdingiz",{
          iconTheme:{
            primary:"black",
            secondary:"white"
          }
        });

        localStorage.setItem("token", JSON.stringify(result.data.token));
        localStorage.setItem("user", JSON.stringify(result.data));
        setAppToken(result.data.token)
      return  setRedirect(true);
      }
      
    };

    if(redirect){
        return <Navigate to={"/"}  replace />
    }
  return (
  <div className="flex justify-center items-center h-screen">
  <div className="xl:w-175 px-10 h-100 rounded-3xl xl:shadow-xl">
    <h1 className="text-center text-3xl font-bold mt-2 mb-2">Login</h1>
    <hr />
    <div className="flex justify-center mt-10">
      <form onSubmit={async (e) =>{e.preventDefault()
        await handleLogin()
      }}>
        <input type="text" onChange={(e) =>setinputValue(e.target.value)} value={inputValue}    className="py-3 p-5 rounded-md  bg-zinc-50 md:w-125 w-75 outline-gray-800"  placeholder="Enter your email" />
        <br /><br />
        <input type="text"  onChange={(e) =>setPassword(e.target.value)} value={password} className="py-3 p-5 rounded-md  bg-zinc-50 md:w-125 w-75 outline-gray-800"  placeholder="Enter your password" />
        <div className="flex justify-end mt-3 mb-4">
        </div>
        <button type="submit" disabled={loading} className={`py-3 bg-gray-800  ${loading ?"cursor-not-allowed": "cursor-pointer"} text-white w-full rounded-md font-bold`}>{loading ?  <Spin indicator={<LoadingOutlined spin className='text-white! cursor-not-allowed' />} size="big" />: "Submit"}</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login