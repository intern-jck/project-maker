import React from 'react';
import './ProjectMaker.scss';

import ProjectForm from './ProjectForm.jsx';

const ProjectMaker = ({ projectData, onCloseProject }) => {
  console.log('ProjectMaker', projectData);

  function saveProject() {
    console.log('Save Project');
  }

  function deleteProject() {
    console.log('Delete Project');
  }

  function closeProjectHandler() {
    console.log('Close Project');
    onCloseProject();
  }

  return (
    <div className='ProjectMaker'>
      <div className='controls'>
        <div className='control-header'>
          <h4>
            <span>NAME:</span> {projectData.name}
          </h4>
          <h4>
            <span>ID:</span> {projectData.project_id}
          </h4>
        </div>

        <div className='control-buttons'>
          <button>
            <i className='fa-regular fa-floppy-disk'></i>
          </button>

          <button onClick={closeProjectHandler}>
            <i className='fa-solid fa-square-xmark'></i>
          </button>
        </div>
      </div>

      {projectData ? <ProjectForm formData={projectData} /> : <></>}
    </div>
  );
};

export default ProjectMaker;
