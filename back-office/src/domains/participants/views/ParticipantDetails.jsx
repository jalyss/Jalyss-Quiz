import React from 'react'
import { useParams } from 'react-router-dom'

const ParticipantDetails = () => {
    const { id } = useParams()
    console.log(+id)
  return (
    <div>
      participant id {id}
    </div>
  )
}

export default ParticipantDetails
