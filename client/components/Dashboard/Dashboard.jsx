import React from "react";

import "./Dashboard.scss";

export default function Dashboard({ onCreateProject, onGetProject, projects }) {
  function buttonHandler(event) {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "create-project":
        onCreateProject();
        break;

      case "project-button":
        onGetProject(value);
        break;

      default:
        break;
    }
  }

  return (
    <div className="Dashboard">
      <div className="header">
        <button name="create-project" onClick={buttonHandler}>
          <i className="fa-solid fa-file-circle-plus"></i>
        </button>
        <button name="download-projects">
          <i className="fa-solid fa-file-export"></i>
        </button>
      </div>

      <div className="content">
        {projects.map((project) => {
          return (
            <button
              name={"project-button"}
              key={project.id}
              value={project.id}
              onClick={buttonHandler}
            >
              <i className="fa-solid fa-file"></i>
              <p>{project.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
