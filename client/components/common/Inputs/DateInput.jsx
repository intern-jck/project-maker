import React from 'react';

const DateInput = ({
  inputId,
  className,
  inputName,
  dateValue,
  changeHandler,
}) => {
  return (
    <div id={inputId} className={className}>
      <label htmlFor={inputName}>
        {inputName ? inputName.toUpperCase() : ''}
      </label>
      <input
        id={inputId}
        type='date'
        name={inputName}
        defaultValue={dateValue}
        onChange={changeHandler}
      />
    </div>
  );
};

export default DateInput;
