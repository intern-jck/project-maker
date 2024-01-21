import React from 'react';

export default function Select({
  inputId,
  className,
  inputName,
  value,
  options,
  changeHandler,
}) {
  console.log(Number(value).toString());
  return (
    <div className={className}>
      <label htmlFor={inputName}>
        {inputName ? inputName.toUpperCase() : ''}
      </label>
      <select
        id={inputId}
        name={inputName}
        onChange={changeHandler}
        value={value}
      >
        <option key={0} value=''>
          {inputName}
        </option>
        {options.map((option, i) => {
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
