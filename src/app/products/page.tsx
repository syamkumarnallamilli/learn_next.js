import Link from 'next/link'
import React from 'react'

const page = () => {
  const productid=100
  return (
    <div>
        <ul>
            <li> 
              <Link href='/products/1'>product1</Link>
              </li>
            <li>product2</li>

            <li>
              <Link href="/products/3">
              product3
              </Link>
              </li>

            <li> 
              <Link href={`/products/${productid}`}>Product {productid}</Link>

            </li>

        </ul>
    </div>
  )
}

export default page