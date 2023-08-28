import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user} from '../Redux/walletSlice'
import axios from 'axios'

const Home = () => {
  const [amount,setAmount]=useState(0)
  const dispatch = useDispatch()
  const User = useSelector(state => state.user)
  const updateWallet = async() => {
    const data = await axios.get(`http://localhost:5000/wallet?_id=${User._id}&amount=${amount}`)
    const response = data.data;
    if(response.success){
      dispatch(user(response.data))
    }else{
      window.alert(response.alert || response.error)
    }
  }
  return (
   <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-36 py-12 border-b-2 bg-gray-700 text-white font-semibold'>
<div>
    <h1>Wallet Balance</h1>
    <h1>&#8377; {User.balance}</h1>
</div>
<div>
    <input type="number" name="" id="" className='w-36 h-8 text-gray-700' onChange={(e)=>setAmount(e.target.value)}/>
    <h1 className='my-1'>Enter Amount</h1>
</div>
<button className='p-5 text-xl bg-gray-500' onClick={updateWallet}>Add Money To Wallet</button>
   </div>
     )
}

export default Home