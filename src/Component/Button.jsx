import React from "react";

const BUTTON_TYPE_CLASSES = {
  google: "bg-blue-500 text-white  hover:bg-blue-400 border-none",
  inverted:
    "text-black border border-black hover:bg-black hover:text-white hover:border-none w-[80%] opacity-70 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex group-hover:opacity-85 transition-opacity",
  default:
    "bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black",
};

const Button = ({ children, buttontype, type = "button", ...otherProps }) => {
  return (
    <button
      type={type}
      {...otherProps}
      className={`h-[35px] px-[35px] rounded-full text-xs uppercase font-bold cursor-pointer flex justify-center items-center transition-all 
      ${BUTTON_TYPE_CLASSES[buttontype] || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
