import React from "react";

export default function TextInput({
  id,
  className,
  name,
  value,
  changeHandler,
}) {
  return (
    // <div className={`text-input ${className}`}>
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        id={id}
        className={className}
        name={name}
        value={value}
        // placeholder={name}
        onChange={changeHandler}
      />
    </>
    // </div>
  );
}
