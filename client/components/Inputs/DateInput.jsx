import React from "react";

export default function DateInput({
  id,
  className,
  name,
  value,
  changeHandler,
}) {
  return (
    <>
      <label htmlFor={name}>{name.replace("-", " ")}</label>
      <input
        type="date"
        name={name}
        id={id ? id : ""}
        className={className ? className : "date-input"}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
}
