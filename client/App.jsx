import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import ProjectMaker from "./components/ProjectMaker.jsx";

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

import "./styles/App.scss";

const SERVER_URL = "http://127.0.0.1:3000";
const DEFAULT_FOLDER = { folder_id: 0, folder_name: "ALL" };

const App = () => {
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(DEFAULT_FOLDER);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [projectPhotos, setProjectPhotos] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // App Functions
  function closeProject() {
    setCurrentProject({});
  }

  function onSelectProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    // onSelectProject(value);
    console.log(value);
  }

  return (
    <div className="App">
      <div className="app-header"></div>

      <div className="app-content">
        <Dashboard
          folderData={folders}
          dashboardData={projects}
          onCreateFolder={createFolder}
          onSelectFolder={getFolderProjects}
          onDeleteFolder={deleteFolder}
          onCreateProject={createProject}
          onSelectProject={onSelectProjectHandler}
        />

        {Object.keys(currentProject).length ? (
          <ProjectMaker
            folderData={folders}
            projectData={currentProject}
            photosData={projectPhotos}
            onCloseProject={closeProject}
            onSaveProject={putProject}
            onDeleteProject={deleteProject}
            onCreateProject={getCreateProject}
          />
        ) : (
          <>no project selected</>
        )}
      </div>
    </div>
  );
};

export default App;
