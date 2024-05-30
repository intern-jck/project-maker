import React from "react";
import SelectInput from "./Inputs/SelectInput.jsx";
import TextInput from "./Inputs/TextInput.jsx";
import "../styles/Dashboard.scss";

const Dashboard = ({
  folderData,
  dashboardData,
  onCreateFolder,
  onSelectFolder,
  onDeleteFolder,
  onSelectProject,
  onCreateProject,
}) => {
  function onCreateFolderHandler(event) {
    const value = document.getElementById("folder-input").value;

    if (value) {
      onCreateFolder(value);
      document.getElementById("folder-input").value = "";
    } else {
      window.alert("Folder name cant be empty!");
    }
  }

  function onDeleteFolderHandler(event) {
    const value = document.getElementById("folder-select").value;

    if (value) {
      onDeleteFolder(value);
    }
  }

  function onSelectFolderHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    onSelectFolder(value);
  }

  function onCreateProjectHandler(event) {
    event.preventDefault();
    onCreateProject();
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
          <button onClick={onCreateFolderHandler}>
            <i className="fa-solid fa-folder-plus"></i>
          </button>
          <button onClick={onCreateProjectHandler}>
            <i className="fa-solid fa-file"></i>
          </button>
        </div>

        <div className="control-row">
          <SelectInput
            inputId="folder-select"
            className="folder-select"
            inputName="Folders"
            options={folderData.map((item) => {
              return [item.folder_id, item.name];
            })}
            changeHandler={onSelectFolderHandler}
          />
          <button onClick={onDeleteFolderHandler}>
            <i className="fa-solid fa-folder-minus"></i>
          </button>
          <button>
            <i className="fa-solid fa-file-export"></i>
          </button>
        </div>
      </div>

      {/* <div className="ProjectList">
        {dashboardData.length ? (
          dashboardData.map((project, i) => {
            return (
              <button
                className="project-button"
                key={project.project_id}
                value={project.project_id}
                onClick={onSelectProject}
              >
                <i className="fa-solid fa-file"></i>
                <p>{project.name}</p>
              </button>
            );
          })
        ) : (
          <>no projects</>
        )}
      </div> */}
    </div>
  );
};

export default Dashboard;
