import React from 'react'
import { useParams } from 'react-router-dom'

const RewardDetails = () => {
    const { id } = useParams()
    console.log(+id)
  return (
    <div>
      reward id {id}
    </div>
  )
}

export default RewardDetails
