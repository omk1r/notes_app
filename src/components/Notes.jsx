import React from "react";
import { CreateNote } from "./CreateNote";
import { Note } from "./Note";

export const Notes = ({ notes, setNotes }) => {
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  return (
    <>
      <div className="text-white flex flex-wrap m-auto">
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <Note id={note.id} title={note.text} deleteNote={deleteNote} />
            </div>
          );
        })}
        <CreateNote setNotes={setNotes} notes={notes} />
      </div>
    </>
  );
};
