import React from 'react';

const DateInput = ({ inputId, className, inputName, value, changeHandler }) => {
  const defaultDate = new Date().toISOString().split('T')[0];
  console.log('DEFAULT DATE:', value);

  return (
    <div id={inputId} className={className}>
      <label htmlFor={inputName}>
        {inputName ? inputName.toUpperCase() : ''}
      </label>
      <input
        id={inputId}
        type='date'
        name={inputName}
        value={value ? value : defaultDate}
        onChange={changeHandler}
      />
    </div>
  );
};

export default DateInput;
