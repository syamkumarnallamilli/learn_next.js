'use client'
import React, { useState } from "react";

function encodeURL(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "_")
    .replace(/\//g, "_")
    .replace(/[^\w-]/g, "")
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function URLConverter() {
  const [input, setInput] = useState("Nike Air & Max/Special");
  const [output, setOutput] = useState({ query: "", path: "" });

  const handleEncode = () => {
    setOutput({
      query: `/search?q=${encodeURIComponent(input)}`,
      path: `/product/${encodeURL(input)}`
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto space-y-4">
      <h2 className="text-xl font-bold">URL Encoder Demo</h2>

      <input
        className="w-full p-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a product name"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleEncode}
      >
        Encode URLs
      </button>

      {output.query && (
        <div className="mt-4 space-y-2">
          <p><strong>Query URL:</strong> {output.query}</p>
          <p><strong>Path URL:</strong> {output.path}</p>
        </div>
      )}
    </div>
  );
}
