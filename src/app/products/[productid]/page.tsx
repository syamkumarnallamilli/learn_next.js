import React from 'react'
type props={
    params:{productid:string}
}
const page = async ({params}:props) => {
    const response= await fetch(`https://fakestoreapi.com/products/${params.productid}`)
    const product=await response.json()
  return (
    <div className='  items-center  mx-auto mt-50 w-1/2 p-4 space-y-3 shadow-xl'>

        <h1 className='text-xl'>Detail about product</h1>
        <p>item: {product.title}</p>
        <p>description: {product.description}</p>
        <p>price: ${product.price}</p>
    </div>
  )
}

export default page