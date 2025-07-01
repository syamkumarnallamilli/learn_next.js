import React from 'react'
import URLConverter from './URLConverter';
import URLEncoderDecoder from './EncodeDecode';

const page = () => {

    const title = "Nike Air Max 2024 & Special Edition";
const safeURL = encodeURI(title);
console.log(safeURL); // Output: "nike_air_max_2024_and_special_edition"

  return (
    <div>
        <URLConverter/>
        <URLEncoderDecoder/>
    </div>
  )
}

export default page