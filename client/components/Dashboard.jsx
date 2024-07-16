import React from "react";
import SelectInput from "./Inputs/SelectInput.jsx";
import TextInput from "./Inputs/TextInput.jsx";
import "../styles/Dashboard.scss";

export default function Dashboard({
  dashboardData,
  onCreateProject,
  onSelectProject,
}) {

  function onSelectProjectHandler(event) {
    event.preventDefault();
    const {value} = event.target;
    onSelectProject(value);
  }

  return (
    <div className="Dashboard">
      <div className="dash-controls">
        <div className="control-row">
          <TextInput
            inputId="folder-input"
            className="folder-input"
            inputName={"folder_name"}
          />
          <button name="create_project" onClick={onCreateProject}>
            <i className="fa-solid fa-file"></i>
          </button>
        </div>

        <div className="control-row">
          <button>
            <i className="fa-solid fa-file-export"></i>
          </button>
        </div>
      </div>

      <div className="ProjectList">
        {dashboardData.length ? (
          dashboardData.map((project, i) => {
            return (
              <button
                className="project-button"
                key={project.id}
                value={project.id}
                onClick={onSelectProjectHandler}
              >
                <i className="fa-solid fa-file"></i>
                <p>{project.name}</p>
              </button>
            );
          })
        ) : (
          <>no projects</>
        )}
      </div>
    </div>
  );
};
