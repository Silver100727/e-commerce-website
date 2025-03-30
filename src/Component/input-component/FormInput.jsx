import React, { useState } from "react";

const FormInput = ({ label, ...otherProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative my-6">
      <input
        className="block w-full bg-white text-gray-700 text-sm p-2 border-b border-gray-500 focus:outline-none focus:border-black"
        {...otherProps}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")} // Keep label shrunk if value exists
      />
      <label
        className={`absolute left-2.5 top-2.5 text-slate-500 text-xs transition-all duration-300 ease-in-out pointer-events-none ${
          isFocused || otherProps?.value ? "top-[-7px]  text-black" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
