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

function decodeURL(param: string): string {
  return param
    .replace(/_/g, " ")
    .replace(/\band\b/g, "&")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function URLEncoderDecoder() {
  const [input, setInput] = useState("");

  const encodedComponent = encodeURIComponent(input);
  const decodedComponent = decodeURIComponent(encodedComponent);

  const encodedCustom = encodeURL(input);
  const decodedCustom = decodeURL(encodedCustom);

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">URL Encoder / Decoder Demo</h1>

      <input
        className="w-full p-2 border rounded"
        placeholder="Type a product name or URL..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="bg-gray-100 p-4 rounded space-y-2">
        <h2 className="font-semibold">Built-in encodeURIComponent()</h2>
        <p><strong>Encoded:</strong> {encodedComponent}</p>
        <p><strong>Decoded:</strong> {decodedComponent}</p>
      </div>

      <div className="bg-blue-100 p-4 rounded space-y-2">
        <h2 className="font-semibold">Custom encodeURL()</h2>
        <p><strong>Encoded:</strong> {encodedCustom}</p>
        <p><strong>Decoded:</strong> {decodedCustom}</p>
      </div>
    </div>
  );
}
