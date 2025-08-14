'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios';
const fetchUsers= async()=>{
const response=await axios.get('https://jsonplaceholder.typicode.com/users') 
return response.data
    }
const Basic = () => {
    const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
  if(isLoading) return <p>Loading...</p>
  if(isError)return <p>Error:{error.message}</p>

  return (
    <div>
<ul>
    {data.map(user => (
  <li key={user.id}>{user.name}</li>
))}


</ul>
    </div>
  )
}

export default Basic