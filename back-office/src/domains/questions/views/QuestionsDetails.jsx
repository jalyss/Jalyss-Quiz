import React from 'react'
import { useParams } from 'react-router-dom'

const QuestionsDetails = () => {
    const { id } = useParams()
    console.log(+id,"this is the id")
  return (
    <div>
      quetion id { id }
    </div>
  )
}

export default QuestionsDetails
