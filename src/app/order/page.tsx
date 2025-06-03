'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
     const router = useRouter();
    const handleClick=()=>{
        router.push('/order/success')
    }
  return (
    <div>
        <h1>order page</h1>
        <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default page