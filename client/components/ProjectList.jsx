import React from "react";
import "../styles/ProjectList.scss";

export default function Dashboard({ listData, onSelectProject }) {
  // function onSelectProjectHandler(event) {
  //   event.preventDefault();
  //   const { value } = event.target;
  //   onSelectProject(value);
  // }

  return (
    <div className="project-list">
      {listData.length ? (
        listData.map((project, i) => {
          return (
            <button
              name={"project-button"}
              key={project.id}
              value={project.id}
              onClick={onSelectProject}
            >
              <i className="fa-solid fa-file"></i>
              <p>{project.name}</p>
            </button>
          );
        })
      ) : (
        <h1>no projects</h1>
      )}
    </div>
  );
}

/**
 * 
 *     // <div className="Dashboard">
      <div className="dash-header">
        <button name="download-projects">
          <i className="fa-solid fa-file-export"></i>
        </button>
      </div> 
     </div> 

 */
