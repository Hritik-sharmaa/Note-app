import React from "react";
import { GoSearch } from "react-icons/go";

const Input = ({ SearchText }) => {
  return (
    <div className="bg-slate-200 flex items-center mb-8 rounded-xl p-3 dark-container">
      <GoSearch size={20} />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => SearchText(e.target.value)}
        className="bg-slate-200 ml-3 border-none outline-none"
      />
    </div>
  );
};

export default Input;
