import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center mt-20 mb-10 dark-text">
      <span className="">
        Created by{" "}
        <a
          href="https://github.com/Hritik-sharmaa/Note-app"
          className="text-blue-700 mr-1 underline decoration-solid">
          {" "}
          hritik Sharma
        </a>
      </span>
      <FaGithub />
    </div>
  );
};

export default Footer;
