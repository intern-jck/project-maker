import React from 'react';

export default function TextArea({ className, inputName, value, changeHandler }) {
  return (
    <div className={className}>
      <label htmlFor={inputName}>{inputName ? inputName.toUpperCase() : ''}</label>
      <textarea name={inputName} value={value} onChange={changeHandler} />
    </div>
  );
}
