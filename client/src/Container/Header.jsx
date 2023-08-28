import React from 'react'
import Logo from "../Assets/Logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { toogleLogin } from '../Redux/walletSlice'


const Header = () => {
  const dispatch = useDispatch()
  const login = useSelector(state => state.login)
  const user = useSelector(state => state.user)
  return (
<div className=' bg-blue-500 text-white rounded-t-lg px-8'>
 <div className="flex flex-col gap-y-5 sm:flex-row items-center justify-between flex-wrap md:flex-nowrap ">
 <div className='flex items-center gap-3'>
    <img src={Logo} alt="" className='w-12 h-12 bg-white border-2 rounded-xl'/>
    <h1 className='text-5xl font-medium'>Wallet</h1>
  </div>
 {!login ? <div className='flex items-center gap-3 text-2xl'>
    <h1>Login Now</h1>
    <i className="fa fa-sign-in" ></i>
  </div> : <div className='flex items-center gap-3 text-2xl'>
    <h1>{user.name}</h1>
    <i className="fa fa-sign-out" onClick={()=>dispatch(toogleLogin())}></i>
  </div>}
 </div>
   </div>  )
}

export default Header