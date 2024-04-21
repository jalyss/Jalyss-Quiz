import React from 'react'
import { Outlet } from 'react-router-dom'

function Questions() {
  return (
    <div className='p-3'>
      <Outlet/>
    </div>
  )
}

export default Questions
