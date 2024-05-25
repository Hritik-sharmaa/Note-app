import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./componets/NotesList";
import Input from "./componets/Input";
import Header from "./componets/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes-app-data", JSON.stringify(notes));
    } else {
      localStorage.removeItem("notes-app-data");
    }
  }, [notes]);

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <>
      <div className={`${darkMode ? "dark-mode" : ""}`}>
        <div className="max-w-[960px] mr-auto ml-auto pr-4 pl-4 min-h-screen pt-8">
          <Header handleDarkMode={setDarkMode} darkMode={darkMode} />
          <Input SearchText={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )}
            addNote={addNote}
            deleteNote={deleteNote} // Ensure the correct prop name is used
          />
        </div>
      </div>
    </>
  );
}

export default App;
