import axios from 'axios'
import React from 'react'

const Api=axios.create({  
     baseURL: 'https://fakestoreapi.com',})  
export default Api