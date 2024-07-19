import React from "react";

export default function TextInput({
  name,
  id,
  className,
  value,
  changeHandler,
}) {
  return (
    <>
      <label htmlFor={name}>{name.replace("-", " ")}</label>
      <input
        type="text"
        name={name}
        id={id}
        className={className ? className : "text-input"}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
}
