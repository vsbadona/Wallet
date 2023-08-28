import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import axios from "axios"
import { useDispatch } from 'react-redux'
import { toogleLogin, user } from '../Redux/walletSlice'

const Login = () => {
  const dispatch = useDispatch()
    const [detail,setDetail] = useState({email:"",password:"",name:""})
    const [page,setPage]=useState(true)
    const handleChange = (e) => {
        setDetail({...detail,[e.target.name]:e.target.value})
    }
     const handleClick = async() => {
if(page){
  const response = await axios.get(`${process.env.REACT_APP_API}?email=${detail.email}&password=${detail.password}`)
  const data = response.data
  if(data.success){
    dispatch(toogleLogin());
    dispatch(user(data.data))
  }else{
    window.alert(data.alert || data.error)
  }
}else{
  const {name,email,password}=detail
  const response = await axios.post(`${process.env.REACT_APP_API}`,{name,email,password})
  const data = response.data
  if(data.success){
    setPage(true)
  }else{
    window.alert(data.alert || data.error)
  }
}
         }

     
     
  return (

   page? <div className="flex flex-col w-full h-screen justify-center items-center rounded-xl gap-8">
        <h1 className='text-3xl font-bold '>Login with us</h1>
    <input type="email" name='email' value={detail.email} onChange={handleChange} className="border-2 w-4/5 lg:w-1/2 font-semibold text-gray-500 rounded-2xl pl-3 h-10" placeholder='Your Email address'/>
    <input type="password" name='password' value={detail.password} onChange={handleChange} className="border-2 w-4/5 lg:w-1/2 font-semibold text-gray-500 rounded-2xl pl-3 h-10" placeholder='Your Password'/>

    <button className='w-4/5 lg:w-1/2 bg-orange-500 text-white font-semibold p-3 rounded-2xl hover:text-gray-200 hover:bg-orange-600' onClick={handleClick} >LOGIN</button>
    <h1 className='font-semibold'>Don't have an account?</h1>
    <button  className='w-4/5 lg:w-1/2 bg-orange-500 text-white font-semibold p-3 rounded-2xl hover:text-gray-200 hover:bg-orange-600 text-center' 
    onClick={()=>setPage(!page)}>SIGN UP</button>
    </div>
     : 
     
     <div className="flex flex-col bg-gray-50 w-full h-screen justify-center items-center rounded-xl gap-8">
        <h1 className='text-3xl font-bold '>Register with us</h1>
    <input type="text" name='name' value={detail.name} onChange={handleChange} className="border-2 w-4/5 lg:w-1/2 font-semibold text-gray-500 rounded-2xl pl-3 h-10" placeholder='Your Name'/>
    <input type="email" name='email' value={detail.email} onChange={handleChange} className="border-2 w-4/5 lg:w-1/2 font-semibold text-gray-500 rounded-2xl pl-3 h-10" placeholder='Your Email address'/>
    <input type="password" name='password' value={detail.password} onChange={handleChange} className="border-2 w-4/5 lg:w-1/2 font-semibold text-gray-500 rounded-2xl pl-3 h-10" placeholder='Your Password'/>

    <button className='w-4/5 lg:w-1/2 bg-orange-500 text-white font-semibold p-3 rounded-2xl hover:text-gray-200 hover:bg-orange-600 disabled:bg-orange-300' disabled={!detail.email || !detail.name || !detail.password} onClick={handleClick}>SIGN UP</button>
    <h1 className='font-semibold'>Already have an account?</h1>
    <button className='w-4/5 lg:w-1/2 bg-orange-500 text-white font-semibold p-3 rounded-2xl hover:text-gray-200 text-center hover:bg-orange-600' onClick={()=>setPage(!page)}>LOGIN</button>
    </div>
  )
}

export default Login