import React from 'react';

const ProjectList = ({ listData, getProjectHandler }) => {
  function selectProject(event) {
    event.preventDefault();
    const { value } = event.target;
    getProjectHandler(value);
  }

  return (
    <div className='ProjectList'>
      {listData.length ? (
        listData.map((project, i) => {
          return (
            <button
              className='project-button'
              key={project.project_id}
              value={project.project_id}
              onClick={selectProject}
            >
              <i className='fa-solid fa-file'></i>
              <p>{project.name}</p>
            </button>
          );
        })
      ) : (
        <>no projects</>
      )}
    </div>
  );
};

export default ProjectList;
