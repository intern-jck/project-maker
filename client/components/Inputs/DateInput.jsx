import React from "react";

const DateInput = ({ id, className, name, value, changeHandler }) => {
  return (
    <div className={`date-input ${className}`}>
      <label htmlFor={name}>{name}</label>
      <input
        id={id}
        type="date"
        name={name}
        defaultValue={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default DateInput;
