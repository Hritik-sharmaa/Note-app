import React, { useState } from "react";

const Addnote = ({ addnote }) => {
  const [noteText, setNoteText] = useState("");

  const characterLength = 200;

  const handleTextChange = (event) => {
    if (characterLength - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim() !== "") {
      addnote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="bg-emerald-500 rounded-xl p-4 min-h-44 flex flex-col justify-between">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note..."
        className="border-none outline-none bg-emerald-500 text-white placeholder:text-slate-50 resize-none"
        onChange={handleTextChange}
        value={noteText}></textarea>
      <div className="flex items-center justify-between">
        <small className="text-white">
          {characterLength - noteText.length} remaining
        </small>
        <button
          className="bg-white pl-2 pr-2 pt-1 pb-1 text-[18px] rounded-xl transition ease-out delay-150 hover:bg-slate-300"
          onClick={handleSaveClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Addnote;
