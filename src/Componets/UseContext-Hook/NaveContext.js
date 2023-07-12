import React, { useContext } from 'react'
import LanguagesContext from '../UseContext-Hook/LanguagesContext'

export default function NaveContext() {
    const {data,setdata} = useContext(LanguagesContext);
    const handlechange = (e)=>{
        setdata(e.target.value);
    }
  return (
    <div>
        <select onChange={handlechange}>
            <option value="en">English</option>
            <option value="gu">Gujrati</option>
        </select>
    </div>
  )
}
