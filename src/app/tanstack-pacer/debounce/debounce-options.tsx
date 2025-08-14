
// 'use client';

// import { useState } from "react";
// import { debounce } from "@tanstack/pacer";

// export default function DebounceOptions() {
//   const [text, setText] = useState("");
//   const [debouncedText, setDebouncedText] = useState("");

//   const debouncedHandler = debounce((value: string) => {
//     setDebouncedText(value);
//   }, {
//     wait: 2000, // 2 seconds delay after typing stops
//     leading: false,
//     trailing: true,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const val = e.target.value;
//     setText(val);              // Shows typed input instantly
//     debouncedHandler(val);     // Updates after 2 seconds of no typing
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Debounce Example</h2>
//       <input
//         type="text"
//         placeholder="Type something..."
//         value={text}
//         onChange={handleChange}
//         className="border px-3 py-2 w-full mb-4"
//       />
//       <p className="text-gray-700">Live Typed Text: {text}</p>
//       <p className="text-green-600">Debounced Text (after delay): {debouncedText}</p>
//     </div>
//   );
// }


"use client";
import { debounce } from "@tanstack/pacer";
import { useState, useMemo } from "react";

export default function DebounceOptions() {
  const [text, setText] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  // Debounce instance should be created once and reused
  const debounceInput = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedValue(value);
      }, {
        wait: 3000,      // Wait for 3 seconds of no typing
        trailing: true,  // Call at the end of the wait
        leading: false   // Don't call immediately
      }),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    debounceInput(value);  // This will only trigger after 3s of no typing
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Debounce Options</h1>
      <input
        type="text"
        placeholder="Type something..."
        className="border border-amber-500 p-2 mb-4 w-full"
        onChange={handleChange}
        value={text}
      />
      <p className="text-red-700">
        <strong>Debounced Output:</strong> {debouncedValue}
      </p>
    </div>
  );
}
