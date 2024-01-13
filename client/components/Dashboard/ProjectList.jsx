import React from 'react';

const ProjectList = ({ projects }) => {
  function selectProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
  }

  return (
    <div className="ProjectList">
      {projects.length ? (
        projects.map((project, i) => {
          console.log(project);
          return (
            <button
              className="project-button"
              key={project.project_id}
              value={project.project_id}
              onClick={selectProjectHandler}
            >
              {project.name}
              <i className="fa-solid fa-file"></i>
            </button>
          );
        })
      ) : (
        <>no data</>
      )}
    </div>
  );
};

export default ProjectList;
