import React from 'react';
import ProjectList from './ProjectList.jsx';
import SelectInput from '../common/Inputs/SelectInput.jsx';
import TextInput from '../common/Inputs/TextInput.jsx';
import './Dashboard.scss';

const test_folder_data = [
  { folder_id: 123, name: 'TEST' },
  { folder_id: 456, name: 'TEST_2' },
];

const Dashboard = ({
  folderData,
  dashboardData,
  onCreateFolder,
  onDeleteFolder,
  onGetProject,
}) => {
  const dashboardDataMapped = dashboardData.map((item) => {
    const { project_id, name } = item;
    return { project_id, name };
  });

  function onChangeTest(event) {
    const { value } = event.target;
    console.log(value);
  }

  function onCreateFolderHandler(event) {
    const value = document.getElementById('folder-input').value;
    console.log(value);

    if (value) {
      onCreateFolder(value);
      document.getElementById('folder-input').value = '';
    } else {
      window.alert('Folder name cant be empty!');
    }
  }

  function onDeleteFolderHandler(event) {
    const value = document.getElementById('folder-select').value;
    console.log(value);

    if (value) {
      onDeleteFolder(value);
    }
  }

  return (
    <div className='Dashboard'>
      <div className='dash-controls'>
        <div className='control-row'>
          <TextInput
            inputId='folder-input'
            className='folder-input'
            inputName={'folder_name'}
            changeHandler={onChangeTest}
          />
          <button onClick={onCreateFolderHandler}>
            <i className='fa-solid fa-folder-plus'></i>
          </button>
          <button>
            <i className='fa-solid fa-file'></i>
          </button>
        </div>
        <div className='control-row'>
          <SelectInput
            inputId='folder-select'
            className='folder-select'
            inputName='folder-select'
            options={folderData.map((item) => {
              return [item.folder_id, item.name];
            })}
            changeHandler={onChangeTest}
          />
          <button onClick={onDeleteFolderHandler}>
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
