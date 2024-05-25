import React from "react";
import { MdDelete } from "react-icons/md";

const Notes = ({id, text, date}) => {
  return (
    <div className="bg-yellow-300 rounded-xl p-4 min-h-44 flex flex-col justify-between">
      <span>{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDelete size={20}/>
      </div>
    </div>
  );
};

export default Notes;
