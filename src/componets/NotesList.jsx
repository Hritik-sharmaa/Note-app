import React from "react";
import Notes from "./Notes";
import Addnote from "./Addnote";

const NotesList = ({ notes, addNote, deleteNote }) => { 
  return (
    <div className="grid gap-4 grid-cols-autofit-minmax ">
      {notes.map((note) => (
        <Notes
          key={note.id} 
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
          id={note.id}
        />
      ))}
      <Addnote addnote={addNote} />
    </div>
  );
};

export default NotesList;
