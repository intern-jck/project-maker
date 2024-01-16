import React from 'react';
import './ProjectMaker.scss';

import ProjectForm from './ProjectForm.jsx';

const ProjectMaker = ({
  projectData,
  onCloseProject,
  onSaveProject,
  onDeleteProject,
}) => {
  function saveProjectHandler(data) {
    console.log('Save Project');
    onSaveProject(data);
  }

  function deleteProjectHandler() {
    console.log('Delete Project');
  }

  function closeProjectHandler() {
    console.log('Close Project');
    onCloseProject();
  }

  function deleteProjectHandler(value) {
    console.log('Delete Project');
    onDeleteProject(value);
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
          <button onClick={closeProjectHandler}>
            <i className='fa-solid fa-square-xmark'></i>
          </button>
        </div>
      </div>

      <ProjectForm
        formData={projectData}
        onSaveClick={saveProjectHandler}
        onDeleteClick={deleteProjectHandler}
      />
    </div>
  );
};

export default ProjectMaker;
