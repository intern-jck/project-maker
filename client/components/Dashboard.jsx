import React from "react";
// import ProjectList from "./ProjectList.jsx";
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
  // Should change to use state?
  const dashboardDataMapped = dashboardData.map((item) => {
    const { project_id, name } = item;
    return { project_id, name };
  });

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

  function onSelectProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
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

      {/* <ProjectList
        listData={dashboardDataMapped}
        getProjectHandler={onSelectProject}
      /> */}

      <div className="ProjectList">
        {dashboardDataMapped.length ? (
          dashboardDataMapped.map((project, i) => {
            return (
              <button
                className="project-button"
                key={project.project_id}
                value={project.project_id}
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

export default Dashboard;
