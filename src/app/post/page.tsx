'use client'
import { useQuery } from "@tanstack/react-query";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";


const fetchPost= async () => {
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok) throw new Error("Error fetching data")
        return response.json()
}
function Postpage(){
    const{data,isLoading,error}=useQuery({
        queryKey:["posts"],
        queryFn:fetchPost
    });
    if(isLoading) return <p className="text-gray-600 text-3xl">Loading...</p>
    if(error) return <p>Error Occured:{error.message}</p>
    return(
        <div>
  {data.map((post: { title: string  }, index: number) => (
    <p key={index}>{index}. {post.title}</p>
  ))}
</div>

    )
}
export default Postpage