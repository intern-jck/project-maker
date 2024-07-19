import React from "react";

export default function TextArea({
  name,
  id,
  className,
  value,
  changeHandler,
}) {
  return (
    <>
      <label htmlFor={name}>{name.replace("-", " ")}</label>
      <textarea
        name={name}
        id={id}
        className={className ? className : "textarea-input"}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
}
