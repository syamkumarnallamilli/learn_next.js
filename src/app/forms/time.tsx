'use client'
import React, { useState } from "react";

function CreateSessionForm() {
  const [sessionTime, setSessionTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduled session time:", sessionTime); // Example: "10:30"
    // You can send this to your backend or save it
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block font-semibold">Set Session Time</label>
      <input
        type="time"
        value={sessionTime}
        onChange={(e) => setSessionTime(e.target.value)}
        className="border px-4 py-2 rounded-md"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Create Session
      </button>
    </form>
  );
}

export default CreateSessionForm;
