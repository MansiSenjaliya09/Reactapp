import React from 'react'
import { useSelector } from 'react-redux'

export default function Movie() {

   const data =  useSelector(y=>y.person?.Search);

   console.log(data);
  return (
    <div>Movie</div>
  )
}
