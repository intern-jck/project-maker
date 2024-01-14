import React from 'react';

const ProjectList = ({ listData, getProjectHandler }) => {
  function selectProject(event) {
    event.preventDefault();
    const { value } = event.target;
    getProjectHandler(value);
  }

  return (
    <div className='ProjectList'>
      {listData.map((project, i) => {
        return (
          <button
            className='project-button'
            key={project.project_id}
            value={project.project_id}
            onClick={selectProject}
          >
            {project.name}
            <i className='fa-solid fa-file'></i>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectList;
