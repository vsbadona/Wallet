import React, { useState } from 'react'

const Register = () => {
    const [detail,setDetail] = useState({email:"",password:"",name:""})
    const handleChange = (e) => {
        setDetail({...detail,[e.target.name]:e.target.value})
    }
  return (
   

    <div className="flex flex-col bg-gray-50 w-full h-screen justify-center items-center rounded-xl gap-8">
        <h1 className='text-3xl font-bold '>Register with us</h1>
    <input type="text" name='name' value={detail.name} onChange={handleChange} className="border-2 w-4/5 lg:w-1/2 font-semibold text-gray-500 rounded-2xl pl-3 h-10" placeholder='Your Name'/>
    <input type="email" name='email' value={detail.email} onChange={handleChange} className="border-2 w-4/5 lg:w-1/2 font-semibold text-gray-500 rounded-2xl pl-3 h-10" placeholder='Your Email address'/>
    <input type="password" name='password' value={detail.password} onChange={handleChange} className="border-2 w-4/5 lg:w-1/2 font-semibold text-gray-500 rounded-2xl pl-3 h-10" placeholder='Your Password'/>

    <button className='w-4/5 lg:w-1/2 bg-orange-500 text-white font-semibold p-3 rounded-2xl hover:text-gray-200 hover:bg-orange-600 disabled:bg-orange-300' disabled={!detail.email || !detail.name || !detail.password} >SIGN UP</button>
    <h1 className='font-semibold'>Already have an account?</h1>
    <h1 to="/login" className='w-4/5 lg:w-1/2 bg-orange-500 text-white font-semibold p-3 rounded-2xl hover:text-gray-200 text-center hover:bg-orange-600'>LOGIN</h1>
    </div>
  )
}

export default Register