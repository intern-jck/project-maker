import React from 'react';
import SelectInput from '../common/Inputs/SelectInput.jsx';

const DashboardControl = () => {
  function onChangeTest() {
    console.log('on change test');
  }

  return (
    <div className="DashboardControl">
      <div className="control-buttons">
        <button>
          <i className="fa-solid fa-folder-plus"></i>
        </button>
        <button>
          <i className="fa-solid fa-file-export"></i>
        </button>
        <button>
          <i className="fa-solid fa-folder-minus"></i>
        </button>
      </div>

      <div className="folder-control">
        <SelectInput
          className="select-input"
          inputName="folder-select"
          value={'ALL'}
          options={['ALL', 'TEST']}
          changeHandler={onChangeTest}
        />
      </div>
    </div>
  );
};

export default DashboardControl;
