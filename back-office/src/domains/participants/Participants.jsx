import React from 'react'
import { Outlet } from 'react-router-dom'

const Participants = () => {
  return (
    <div className='p-3'>
      <Outlet/>
    </div>
  )
}

export default Participants
