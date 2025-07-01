// // app/blog/page.tsx
// 'use client'

// export  function BlogList() {
//     return (
//       <div style={{ padding: '40px' }}>
//         <h1>Blog</h1>
//         <ul>
//           <li><a href="/blog/my-first-post">My First Post</a></li>
//           <li><a href="/blog/my-second-post">Hello World</a></li>
//         </ul>
//       </div>
//     );
//   }
  
//   // app/blog/page.tsx
// import { useSearchParams, useRouter, usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const allPosts = Array.from({ length: 100 }, (_, i) => ({
//   id: i + 1,
//   title: `Blog Post ${i + 1}`,
// }));

// export default function BlogPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const pathname = usePathname();

//   const page = parseInt(searchParams.get("page") || "1", 10);
//   const pageSize = 10;
//   const totalPages = Math.ceil(allPosts.length / pageSize);

//   const start = (page - 1) * pageSize;
//   const paginatedPosts = allPosts.slice(start, start + pageSize);

//   const handlePageChange = (p: number) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", p.toString());
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
//       <ul>
//         {paginatedPosts.map((post) => (
//           <li key={post.id} className="mb-2">{post.title}</li>
//         ))}
//       </ul>

//       <div className="flex gap-2 mt-4">
//         <button
//           disabled={page === 1}
//           onClick={() => handlePageChange(page - 1)}
//           className="px-2 py-1 border"
//         >
//           Previous
//         </button>

//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => handlePageChange(i + 1)}
//             className={`px-3 py-1 border ${
//               page === i + 1 ? "bg-blue-500 text-white" : ""
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           disabled={page === totalPages}
//           onClick={() => handlePageChange(page + 1)}
//           className="px-2 py-1 border"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
  

//basic step to learn core logic of pagination
// import React from 'react'

// const page = () => {

//   const items=Array.from({length:25},(_,i)=>`items ${i+1}`) //creates a records,"item1,item2,.....item25"
//   const currentPage=1 //try differnet pages then see console tab
//   const itemsPerPage=5
//   const start=(currentPage-1) * itemsPerPage;
//   const end=start+itemsPerPage;
//   const visibleItems=items.slice(start,end)
//   console.log("items",visibleItems)
//   return (
//     <div>page</div>
//   )
// }

// export default page


//use btns
// 'use client'
// import React, { useState } from 'react'

// function page() {

//   const items=Array.from({length:50},(_,i)=>`Products ${i+1}`)
//   const [currentPage,setCurrrentPage]=useState(1)
//   const itemsPerPage=5;
//   const start=(currentPage-1) * itemsPerPage; //from starting item
//   const end=start+itemsPerPage //to last item
//   const visibleItems=items.slice(start,end) //0 to 5(brfore) items 
//   const totalPages=Math.ceil(items.length/itemsPerPage) // total pages=10
//   const handlePrev=()=>{ //prev btns
//     setCurrrentPage(currentPage-1)
//   }
//   const handleNext=()=>{ //next btn
//     setCurrrentPage(currentPage+1)

//   }

//   return (
//     <div className='max-w-md mx-auto p-4 '>
//       <h1 className='text-xl font-bold mb-4'>Pages</h1>
//       <ul className='flex flex-col mb-4  justify-center items-center gap-2'>
//       {visibleItems.map((item,idx)=>(
//         <li key={idx}>{item}</li>

//       ))}
//       </ul>
      
//       <div className='flex gap-4 justify-center'>
//         <button onClick={handlePrev} disabled={currentPage===1} className={`px-3 py-1 border rounded ${
//             currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-400'
//           }`}>prev</button>
//         {Array.from({length:totalPages},(_,i)=>( //[1,2,3,4,5...10]
//           <button   onClick={() => setCurrrentPage(i + 1)} // setCurrentPage(8)==>currentPage=8==>do core logic==>findout start, end, and slice then display data
//             key={i}
//             className={`px-3 py-1 border rounded ${
//               currentPage === i + 1 // 3 === 2 + 1 → true 
//                 //i=0-->btn1
//                 //i=1-->btn2
//                 //i=2-->btn3
//                 //i=4--->btn5
//                 //curentpage=3 that means  btn3 so 3===2+1-->true

//                 ? 'bg-blue-600 text-white'
//                 : 'bg-blue-200'
//             }`}
//           >
//             {i + 1} {/** shoeing btns==>0+1-1,1+1=2,2+1=3,3+1=4,4+1=5.....10nbtn */}
//           </button>
//         ))}                                     {/** 10===10-->true btn disbled.. no more actions. if it is 9===10--> false not disable next btn working.. */}
//         <button onClick={handleNext} disabled={currentPage===totalPages}className={`px-3 py-1 border rounded ${
//             currentPage === totalPages
//               ? 'bg-gray-300 cursor-not-allowed'
//               : 'bg-blue-400'
//           }`}>next</button>
//       </div>
//     </div>
//   )
// }

// export default page




// | currentPage | start             | end          | visibleItems (items.slice(start, end)) |
// | ----------- | ----------------- | ------------ | -------------------------------------- |
// | 1           | `(1 - 1) * 5 = 0` | `0 + 5 = 5`  | Product 1 → 5                          |
// | 2           | `(2 - 1) * 5 = 5` | `5 + 5 = 10` | Product 6 → 10                         |
// | 3           | 10                | 15           | Product 11 → 15                        |
// | ...         | ...               | ...          | ...                                    |
// | 10          | 45                | 50           | Product 46 → 50                        |







// use searchparams,querystring..
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromURL = parseInt(searchParams.get('page')) || 1; //If ?page=3 exists in the URL, it will be 3 or If no ?page= is present, it will fallback to 1
  const items = Array.from({ length: 50 }, (_, i) => `Products ${i + 1}`);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const start = (pageFromURL - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleItems = items.slice(start, end);

  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Pages</h1>

      <ul className="flex flex-col mb-4 justify-center items-center gap-2">
        {visibleItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="flex gap-2 justify-center">
        <button
          onClick={() => goToPage(pageFromURL - 1)}
          disabled={pageFromURL === 1}
          className={`px-3 py-1 border rounded ${
            pageFromURL === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-400 text-white'
          }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              pageFromURL === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-blue-200'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(pageFromURL + 1)}
          disabled={pageFromURL === totalPages}
          className={`px-3 py-1 border rounded ${
            pageFromURL === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-400 text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Page;
