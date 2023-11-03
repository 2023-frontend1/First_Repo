import React from 'react'
import { useParams } from 'react-router-dom'

const Number_page = () => {
  let {number} = useParams();
  return <h2>{number}</h2>
}

export default Number_page