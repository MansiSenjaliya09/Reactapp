import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CommentsAxios() {
    const [data,setdata] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(y=>{
            setdata(y.data);
        })
    },[])
    console.log(data);
  return (
    <div>CommentsAxios call console...</div>
  )
}
