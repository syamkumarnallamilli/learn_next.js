'use client'
import { useState } from "react";
 export default function useCounter(){
    const[count,setCount]=useState(0)
    const inc=()=>setCount(prev=>prev+1)
    const dec=()=>setCount(prev=>prev-1)
    return{
        inc,count,dec}
    
}