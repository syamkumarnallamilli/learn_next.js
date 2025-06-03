
import React from 'react'
import { notFound } from 'next/navigation'
type props={
    params:{productid:string,reviewid:string}
}
const page = ({params}:props) => {

  const{productid,reviewid}=params //you can access the values from the URL using
  
  if (Number(reviewid) > 1000) {
    notFound();
}

  return (
    <div>
        <h1>review products</h1>
        <p>Review {reviewid} for product {productid}</p>
    </div>
  )
}

export default page