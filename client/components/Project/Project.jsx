import React from 'react';
import './Project.scss';

import test_data from '../../assets/work.json';

import ProjectControls from './ProjectControls.jsx';
import ProjectForm from './ProjectForm.jsx';

const Project = () => {
  // console.log(test_data);

  return (
    <div className="Project">
      <ProjectControls />
      <ProjectForm formData={test_data} />
    </div>
  );
};

export default Project;
