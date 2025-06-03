import React from 'react'
import { notFound } from 'next/navigation';
type props={
    params:{slug:string}
}
const fakePosts:Record<string,{title:string;content:string}>={
    'my-first-post':{
        title:"My first Post",
        content:"this is my first post"
    },
    'my-second-post':{
        title:"second post",
        content:"hello world!"
    }
}

const page = ({params}:props) => {

const slug=params.slug
const post=fakePosts[slug]
if(!post){
    notFound();
}
  return (
    <div>
        <h1>{post.title}</h1>
        <h2>{post.content}</h2>
        <a href="/blog">back to blog list</a>
    </div>
  )
}

export default page