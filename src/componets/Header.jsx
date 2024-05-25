import React from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const Header = ({ handleDarkMode, darkMode }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-4xl font-bold">Notes</h1>
      <button
        onClick={() => handleDarkMode((prevMode) => !prevMode)}
        className="toggle-mode">
        {darkMode ? <IoMoonOutline size={25} /> : <IoSunnyOutline size={25} />}
      </button>
    </div>
  );
};

export default Header;
