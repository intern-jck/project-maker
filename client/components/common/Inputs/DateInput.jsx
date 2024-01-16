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
        // defaultValue={defaultDate}
        value={value ? value : defaultDate}
        onChange={changeHandler}
      />
    </div>
  );
};

export default DateInput;

// import SelectInput from './SelectInput.jsx';

/*

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];
const YEARS = [
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
];
 <div className='dateRow'>
        <SelectInput
          className={'startMonth'}
          inputName='start_month'
          value={date['start_month']}
          options={MONTHS}
          changeHandler={changeHandler}
        />
        <SelectInput
          className={'startYear'}
          inputName='start_year'
          value={date['start_year']}
          options={YEARS}
          changeHandler={changeHandler}
        />
      </div>
      <div className='dateRow'>
        <SelectInput
          className={'endMonth'}
          inputName='end_month'
          value={date['end_month']}
          options={MONTHS}
          changeHandler={changeHandler}
        />
        <SelectInput
          className={'endYear'}
          inputName='end_year'
          value={date['end_year']}
          options={YEARS}
          changeHandler={changeHandler}
        />
      </div>

*/
