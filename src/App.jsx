import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./componets/NotesList";
import Addnote from "./componets/Addnote";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is first my note",
      date: "15/04/24",
    },
    {
      id: nanoid(),
      text: "this is second my note",
      date: "15/04/24",
    },
    {
      id: nanoid(),
      text: "this is third my note",
      date: "15/04/24",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = { 
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    <>
      <div className="max-w-[960px] mr-auto ml-auto pr-4 pl-4">
        <NotesList notes={notes} addnote={addNote} />
      </div>
    </>
  );
}

export default App;
