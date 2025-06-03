// import React from 'react'
// type props={
//     params:{articleid:string},
//     searchparams:{cat:string}
// }

// const page = async ({params,searchparams}:props) => {
//     const{articleid}=(await params)
//     const cat=await searchparams
    
//   return (
//     <div>
        
//         <h2>Aricle page{articleid} {cat}</h2>

//     </div>
//   )
// }

// export default page



// import React from 'react'

// async function  Article({params,searchparams}:
//     {params:Promise<{articleid:string}>,
//     searchparams:Promise<{cat:string}>
// }) {

//     const{articleid}=(await params)
//     const cat=(await searchparams)
//     console.log(cat)
//   return (
//     <div>
//         <h1>Article Page{articleid}</h1>
//         <h2>SearchParams:{cat}</h2>
        
        
//         </div>
    
//   )
// }

// export default Article


import React from 'react'

async function Article({ params, searchParams }: {
  params: Promise<{ articleid: string }>;
  searchParams: Promise<{ cat?: string,type:string }>;
}) {
  const { articleid } = await params;
  const { cat,type } = await searchParams;
  console.log(cat,type)

  return (
    <div>
      <h1>Article Page: {articleid}</h1>
      <h2>SearchParams: {cat} & {type}</h2>
    </div>
  );
}

export default Article;

