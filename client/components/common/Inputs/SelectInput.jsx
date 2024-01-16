import React from 'react';

export default function Select({
  className,
  inputName,
  value,
  options,
  changeHandler,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputName}>
        {inputName ? inputName.toUpperCase() : ''}
      </label>
      <select name={inputName} onChange={changeHandler} value={value}>
        <option key={0} value=''>
          {inputName}
        </option>
        {options.map((option, i) => {
          console.log(option[0], option[1]);
          return (
            <option key={i + 1} value={option[0]}>
              {option[1]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
