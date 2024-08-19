"use client";
import React, { useState } from "react";

const SongRequestForm = () => {
  const [song, setSong] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Song Requested:", song);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={song}
        onChange={(e) => setSong(e.target.value)}
        placeholder="Enter song title"
        className="border rounded p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Request Song
      </button>
    </form>
  );
};

export default SongRequestForm;
