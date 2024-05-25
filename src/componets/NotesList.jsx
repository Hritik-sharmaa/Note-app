import React from "react";
import Notes from "./Notes";
import Addnote from "./Addnote";

const NotesList = ({ notes, addnote }) => {
  return (
    <div className="grid gap-4 grid-cols-autofit-minmax">
      {notes.map((note) => (
        <Notes id={note.id} text={note.text} date={note.date}/>
      ))}
      <Addnote addnote={addnote}/>
    </div>
  );
};

export default NotesList;
