import React from "react";

export default function TextArea({ className, name, value, changeHandler }) {
  return (
    // <div className={className}>

    <>
      <label htmlFor={name}>{name ? name : ""}</label>
      <textarea
        name={name}
        value={value}
        onChange={changeHandler}
        // placeholder={inputName}
      />
    </>
    // </div>
  );
}
