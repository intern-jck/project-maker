import React from 'react';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const YEARS = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
import SelectInput from './SelectInput.jsx';

const DateInput = ({ inputName, className, date, changeHandler }) => {
  return (
    <div className={className}>
      <span className="dateInputName">{inputName.toUpperCase()}</span>

      <div className="dateRow">
        <SelectInput
          className={'startMonth'}
          inputName="start_month"
          value={date['start_month']}
          options={MONTHS}
          changeHandler={changeHandler}
        />
        <SelectInput
          className={'startYear'}
          inputName="start_year"
          value={date['start_year']}
          options={YEARS}
          changeHandler={changeHandler}
        />
      </div>
      <div className="dateRow">
        <SelectInput
          className={'endMonth'}
          inputName="end_month"
          value={date['end_month']}
          options={MONTHS}
          changeHandler={changeHandler}
        />
        <SelectInput
          className={'endYear'}
          inputName="end_year"
          value={date['end_year']}
          options={YEARS}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
};

export default DateInput;
