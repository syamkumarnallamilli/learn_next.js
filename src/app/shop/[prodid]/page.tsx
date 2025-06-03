// app/products/[id]/page.tsx

import { notFound } from 'next/navigation';

type Props = {
  params: { prodid: string };
};

async function getProduct(prodid: string) {
  const res = await fetch(`https://dummyjson.com/products/${prodid}`);

  if (!res.ok) return null;

  return res.json();
}

export default async function ProductDetail({ params }: Props) {
  const product = await getProduct(params.prodid);

  if (!product) {
    notFound(); // Shows the 404 page
  }

  return (
    <div className="p-6 rouded shadow border w-1/5 mx-auto">
      
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64"
      />
      <div className='rounded shadow p-3'>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700">Brand: {product.brand}</p>
      <p className="text-green-700 font-semibold">₹{product.price}</p>
      </div>
    </div>
  );
}


// User visits: /products/5
//       ↓
// Next.js sees [id] route → params = { id: "5" }
//       ↓
// Call fetch('https://dummyjson.com/products/5')
//       ↓
// If product found → render product page
// If not found → call notFound() → show 404
