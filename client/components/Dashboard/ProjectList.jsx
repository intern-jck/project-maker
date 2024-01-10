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
          return (
            <button className="project-button" value="project button" onClick={selectProjectHandler}>
              Project
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
