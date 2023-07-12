import React, { useState } from 'react'
import data from '../Pagination-Task/Datapagin';
export default function Paginationdata() {
const[index,setIndex] = useState(0);
    const next = ()=>{
        if(index<data.length-1)
        {
            setIndex(index+1);
        }
        else{
            setIndex(0)
        }
    }

    const preve = ()=>{
        if(index<=0)
        {
            setIndex(data.length-1);
        }
        else{
            setIndex(index-1)
        }
    }
  return (
    <div>
    <div className='card' style={{width:"400px"}}>
        <img className='card-img-top' src={data[index]?.image} alt='card image'></img>
        <div className='card-body'>
            <h4 className='card-title'>{data[index]?.name}</h4>
            <p className='card-text'>{data[index]?.age}</p>   
            <a href='#' className='btn btn-primary'>view profile</a>
        </div>
    </div>
    <button type='button' className='btn btn-success' onClick={preve}>preve</button>
    <button type='button' className='btn btn-success' onClick={next}>next</button>
    </div>
  )
}
