import React from 'react';
import './ProjectMaker.scss';

import test_data from '../../assets/work.json';

import ProjectControls from './ProjectControls.jsx';
import ProjectForm from './ProjectForm.jsx';

const ProjectMaker = () => {
  // console.log(test_data);

  function saveProject() {
    console.log('Save Project');
  }

  function deleteProject() {
    console.log('Delete Project');
  }

  function closeProject() {
    console.log('Close Project');
  }

  return (
    <div className="ProjectMaker">
      {/* <ProjectControls /> */}
      {/* PROJECT CONTROLS */}
      <div className="controls">
        <div className="control-header">
          <h4>
            <span>NAME:</span> NAME
          </h4>
          <h4>
            <span>ID:</span> ID_NUMBER
          </h4>
        </div>

        <div className="control-buttons">
          <button>
            <i className="fa-regular fa-floppy-disk"></i>
          </button>

          <button>
            <i className="fa-solid fa-square-xmark"></i>
          </button>
        </div>
      </div>

      <ProjectForm
        formData={test_data}
        saveProject={saveProject}
        deleteProject={deleteProject}
        closeProject={closeProject}
      />
    </div>
  );
};

export default ProjectMaker;
