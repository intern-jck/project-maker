import React from 'react';
import ProjectList from './ProjectList.jsx';
import SelectInput from '../common/Inputs/SelectInput.jsx';
import TextInput from '../common/Inputs/TextInput.jsx';
import './Dashboard.scss';

const test_folder_data = [
  { folder_id: 123, name: 'TEST' },
  { folder_id: 456, name: 'TEST_2' },
];

const Dashboard = ({ folderData, dashboardData, onGetProject }) => {
  const dashboardDataMapped = dashboardData.map((item) => {
    const { project_id, name } = item;
    return { project_id, name };
  });

  function onChangeTest(event) {
    const { value } = event.target;
    console.log(value);
  }

  return (
    <div className='Dashboard'>
      <div className='dash-controls'>
        <div className='control-row'>
          <TextInput
            className='folder-input'
            inputName={'folder_name'}
            value={''}
            changeHandler={onChangeTest}
          />
          <button>
            <i className='fa-solid fa-folder-plus'></i>
          </button>
          <button>
            <i className='fa-solid fa-file'></i>
          </button>
        </div>
        <div className='control-row'>
          <SelectInput
            className='select-input'
            inputName='folder-select'
            // value={''}
            options={test_folder_data.map((item) => {
              // console.log(item.folder_id, item.name);
              return [item.folder_id, item.name];
            })}
            changeHandler={onChangeTest}
          />
          <button>
            <i className='fa-solid fa-folder-minus'></i>
          </button>
          <button>
            <i className='fa-solid fa-file-export'></i>
          </button>
        </div>
      </div>

      <ProjectList
        listData={dashboardDataMapped}
        getProjectHandler={onGetProject}
      />
    </div>
  );
};

export default Dashboard;
