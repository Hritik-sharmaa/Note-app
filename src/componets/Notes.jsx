import React from "react";
import { MdDelete } from "react-icons/md";

const Notes = ({ id, text, date, deleteNote }) => {
  return (
    <div className="bg-yellow-300 rounded-xl p-4 min-h-44 flex flex-col justify-between whitespace-pre-wrap dark-note">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDelete
          size={20}
          onClick={() => deleteNote(id)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Notes;
