import React from 'react';
import './Project.scss';

import test_data from '../../assets/work.json';

import ProjectControls from './ProjectControls.jsx';
import ProjectForm from './ProjectForm.jsx';

const Project = () => {
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
    <div className="Project">
      <ProjectControls />
      <ProjectForm
        formData={test_data}
        saveProject={saveProject}
        deleteProject={deleteProject}
        closeProject={closeProject}
      />
    </div>
  );
};

export default Project;
