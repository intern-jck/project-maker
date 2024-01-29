import React from 'react';

export default function TextInput({
  id,
  className,
  name,
  value,
  changeHandler,
}) {
  return (
    <div className={className}>
      <label htmlFor={name}>{name}</label>
      <input
        id={id}
        type='text'
        name={name}
        value={value}
        placeholder={name}
        onChange={changeHandler}
      />
    </div>
  );
}
