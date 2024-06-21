import React, { useState } from "react";

export const CreateNote = ({ setNotes, notes }) => {
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() === "") return;

    const newNote = {
      id: new Date().getTime(), // Unique ID
      text: input,
    };

    setNotes([...notes, newNote]);
    setInput("");
  };

  return (
    <div className="bg-transparent border border-slate-50 rounded-xl w-60 h-40 flex flex-col justify-between text-white m-1">
      <textarea
        placeholder="Type Note..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="outline-none bg-transparent w-full p-2 placeholder-white resize-none"
      ></textarea>
      <div className="flex justify-end">
        <button className="border rounded m-2 px-1" onClick={addNote}>
          Save
        </button>
      </div>
    </div>
  );
};
