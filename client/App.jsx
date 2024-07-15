import React, { useEffect, useState } from "react";
import { Dashboard } from "./components/Dashboard.jsx";
import { ProjectForm } from "./components/ProjectForm.jsx";

import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "./api/projects.js";

// import {
//   getFolders,
//   createFolder,
//   deleteFolder,
//   getFolderProjects,
// } from "./api/folders_api.js";

// import { getPhotos } from "./api/photos_api.js";

import "./styles/App.scss";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  // const [folders, setFolders] = useState([]);
  // const [currentFolder, setCurrentFolder] = useState({});
  // const [projectPhotos, setProjectPhotos] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        console.log(data.data)
        setProjects(data.data);
        // setFolders([DEFAULT_FOLDER]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function createProjectHandler() {
    try {
      const result = await createProject();
      const projects = await getProjects();
      setProjects(projects.data);
    } catch(error) {
      console.log(error)
    }
  }

  async function getProjectHandler(id) {
    try {
      const result = await getProject(id);
      setCurrentProject(result.data);
    } catch(error) {
      console.log(error)
    }
  }

  function closeProjectHandler() {
    setCurrentProject({});
  }

  return (
    <div className="App">
      <div className="app-header"></div>

      <div className="app-content">
        <Dashboard
          // onAction={actionHandler}
          // folderData={folders}
          dashboardData={projects}
          onCreateProject={createProjectHandler}
          onSelectProject={getProjectHandler}
          // onCreateFolder={createFolder}
          // onSelectFolder={getFolderProjects}
          // onDeleteFolder={deleteFolder}
        />

        {Object.keys(currentProject).length ? (
          <ProjectForm
          projectData={currentProject}
          onCloseProject={closeProjectHandler}
            // onAction={actionHandler}
            // folderData={folders}
            // photosData={projectPhotos}
            // onSaveProject={saveProject}
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


/**
 * 
 
 */