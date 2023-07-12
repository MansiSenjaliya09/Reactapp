import React, { useEffect, useState } from 'react'
import axios from 'axios';
import authFetch from '../AXiosbasec/Custom'
export default function Account() {
    const [data,setdata] = useState([]);
    useEffect(()=>{
     authFetch.get('https://real-pear-fly-kilt.cyclic.app/accounts')
     .then(y=>{
        console.log(y);
     })
    },[])
  return (
    <div>Account data api show console..</div>
  )
}
// export default function Account() {
//   const [data,setdata] = useState([]);
//   useEffect(()=>{
//    axios.get('https://real-pear-fly-kilt.cyclic.app/accounts')
//    .then(y=>{
//       console.log(y);
//    })
//   },[])
// return (
//   <div>Account data api show console..</div>
// )
// }
