import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
  const user = useSelector(state => state.user)
  return (
    <div className=''>
<div className="mx-auto border-2 rounded-full w-36 h-36 text-center text-xl flex flex-col items-center justify-center m-5">
    <i className="fa fa-arrow-down"></i>
<h1 className=''>History</h1>
</div>
        <div className="flex items-center justify-around text-lg font-medium border-2 bg-green-400 text-white">
            <h1>Date</h1>
            <h1>Amount</h1>
        </div>
       {
        user?.history?.length>=1 ? user.history.map((hist)=>(
          <div className="flex items-center justify-around text-lg font-medium   ">
          <h1>{hist.date}</h1>
          <h1>{hist.amount}</h1>
      </div>
        )): <div className="flex items-center justify-around text-lg font-medium   ">
        <h1>No Transection Found</h1>
    </div>
       }
    </div>
  )
}

export default History