import React from "react";
import SelectInput from "./Inputs/SelectInput.jsx";
import TextInput from "./Inputs/TextInput.jsx";
import "../styles/Dashboard.scss";

export default function Dashboard({
  dashboardData,
  onSelectProject,
}) {
  function onSelectProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    onSelectProject(value);
  }

  return (
    <div className="Dashboard">
      <div className="dash-header">
        <button name="download-projects">
          <i className="fa-solid fa-file-export"></i>
        </button>
      </div>

      <div className="project-list">
        {dashboardData.length ? (
          dashboardData.map((project, i) => {
            return (
              <button
                name={"project-button"}
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
          <h1>no projects</h1>
        )}
      </div>
    </div>
  );
}
