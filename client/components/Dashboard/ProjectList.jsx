import React from 'react';

const ProjectList = ({ data, clickHandler }) => {
  function selectProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
    clickHandler(value);
  }

  return (
    <div className="ProjectList">
      {data.length ? (
        data.map((project, i) => {
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
