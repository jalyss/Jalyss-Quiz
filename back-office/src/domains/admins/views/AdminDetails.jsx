import React from 'react'
import { useParams } from 'react-router-dom'

const AdminDetails = () => {
    const { id } = useParams()
  return (
    <div>
      admin id {+id}
    </div>
  )
}

export default AdminDetails
