// "use client";
// import { useState } from "react";
// import { debounce } from "@tanstack/pacer";
// import { set } from "date-fns";
// function DebouncePage() {
// const [debounceinput, setDebounce] = useState("");
// const serchDebounce = debounce((value: string) => {
//   console.log("Debounced value:", value);
// }, { wait: 1000 });
// const handleChange=(e:React.ChangeEvent<HTMLInputElement>) =>{
//     const value = e.target.value;
// setDebounce(value);
// serchDebounce(value);
// }
//   return (
//     <div>
//       <h1>Debounce Page</h1>
//       <p>This page demonstrates the debounce functionality in TanStack Pacer.</p>
//       <input type="text"
//       name="debounce-input"
//       value={debounceinput}
//       placeholder="Type something..."
//       onChange={handleChange}
//       ></input>
//       <p>debounce output:{debounceinput}</p>
//     </div>
//   );
// }
// export default DebouncePage;



// "use client";
// import { useState } from "react";
// import { debounce } from "@tanstack/pacer";

// export default function DebouncePage() {
//   const [input, setInput] = useState("");

//   const handleDebouncedChange = debounce((val: string) => {
//     console.log("Debounced Input:", val);
//   }, {
//     wait: 3000,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const val = e.target.value;
//     setInput(val);
//     handleDebouncedChange(val);
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         value={input}
//         onChange={handleChange}
//         placeholder="Type something..."
//         className="border p-2"
//       />
//       <p className="mt-2 bg-black text-white p-3">Current Input: {input}</p>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { debounce } from "@tanstack/pacer";

export default function DebouncePage() {
  const [input, setInput] = useState(""); // Real-time value
  const [debouncedInput, setDebouncedInput] = useState(""); // Debounced UI value

  const updateDebouncedInput = debounce((val: string) => {
    setDebouncedInput(val);
  }, {
    wait: 3000, // 3 seconds
   
    
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);            // optional: real-time state (can be removed)
    updateDebouncedInput(val);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
        className="border p-2"
      />

      {/* Debounced output */}
      <p className="mt-2 bg-black text-white p-3">
        Debounced Input: {debouncedInput}
      </p>


    
    </div>
  );
}
