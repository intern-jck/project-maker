import React, { useEffect, useState } from "react";
import { Dashboard } from "./components/Dashboard.jsx";
import { ProjectForm } from "./components/ProjectForm.jsx";

import {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "./projects_api.js";

import {
  getFolders,
  createFolder,
  deleteFolder,
  getFolderProjects,
} from "./folders_api.js";

import { getPhotos } from "./photos_api.js";

import "./styles/App.scss";

// const SERVER_URL = "http://127.0.0.1:3000";
// const DEFAULT_FOLDER = { folder_id: 0, folder_name: "ALL" };

const App = () => {
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({});
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [projectPhotos, setProjectPhotos] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        // setFolders([DEFAULT_FOLDER]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // App Functions
  function closeProject() {
    setCurrentProject({});
  }

  // function onSelectProjectHandler(event) {
  //   event.preventDefault();
  //   const { value } = event.target;
  //   // onSelectProject(value);
  //   console.log(value);
  //   getProject(value)
  //     .then((data) => {
  //       console.log(data);
  //       setCurrentProject(data.project);
  //       setCurrentPhotos(data.photos);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  function saveProject(project, photos) {
    console.log("saving: ", project, photos)
    updateProject(project, photos);
  }

  async function actionHandler(event) {
    event.preventDefault();
    const { value, name } = event.target;
    // console.log(value, name);
    let data;

    switch (name) {
      // Projects API
      case "close_project":
        console.log("closing project")
        closeProject();  
        break;
      case "create_project":
        data = await createProject();
        console.log(data);
        break;
      case "get_project":
        console.log("getting project: ", value);
        data = await getProject(value);
        // console.log(data);
        setCurrentProject(data.project);
        setProjectPhotos(data.photos);
        break;
      case "get_projects":
        data = await getProjects();
        console.log(data);
        break;
      case "update_project":
        data = await updateProject();
        console.log(data);
        break;
      case "delete_project":
        data = await deleteProject();
        console.log(data);
        break;
      // Folders API
      case "get_folders":
        data = await getFolders();
        
        console.log(data);
        break;
      case "create_folder":
        data = await createFolder();
        console.log(data);
        break;
      case "delete_folder":
        data = await deleteFolder();
        console.log(data);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="app-header"></div>

      <div className="app-content">
        <Dashboard
          onAction={actionHandler}
          folderData={folders}
          dashboardData={projects}
          // onCreateFolder={createFolder}
          // onSelectFolder={getFolderProjects}
          // onDeleteFolder={deleteFolder}
          // onCreateProject={createProject}
          // onSelectProject={onSelectProjectHandler}
        />

        {Object.keys(currentProject).length ? (
          <ProjectForm
            onAction={actionHandler}
            folderData={folders}
            projectData={currentProject}
            photosData={projectPhotos}
            onSaveProject={saveProject}
            // onCloseProject={closeProject}
            // onDeleteProject={deleteProject}
            // onCreateProject={getCreateProject}
          />
        ) : (
          <>no project selected</>
        )}
      </div>
    </div>
  );
};

export default App;
