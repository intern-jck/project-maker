import React from 'react';

export default function TextInput({
  inputId,
  className,
  inputName,
  value,
  changeHandler,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputName}>
        {inputName ? inputName.toUpperCase() : ''}
      </label>
      <input
        id={inputId}
        type='text'
        name={inputName}
        value={value}
        placeholder={inputName}
        onChange={changeHandler}
      />
    </div>
  );
}