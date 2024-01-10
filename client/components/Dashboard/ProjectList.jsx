import React from 'react';

const ProjectList = ({ projects }) => {
  console.log(projects);

  function selectProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
    // selectProject(value);
  }

  return (
    <div className="ProjectList">
      {projects.length ? (
        projects.map((project, i) => {
          console.log(project);
          return (
            <button key={i} className="project-button" value={project.id} onClick={selectProjectHandler}>
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
