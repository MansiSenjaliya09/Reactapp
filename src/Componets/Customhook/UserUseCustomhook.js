import React from 'react'
import { useFetch } from '../Customhook/useFetch'

export default function UserUsecustomhook() {

  const { loading, data}=  useFetch("https://jsonplaceholder.typicode.com/posts");

  console.log(data);
  return (
    <div>User UseFetch customhook....</div>
  )
}