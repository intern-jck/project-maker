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
  // const [projectPhotos, setProjectPhotos] = useState([]);
  // const [folders, setFolders] = useState([]);
  // const [currentFolder, setCurrentFolder] = useState({});

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

  async function createProjectHandler() {
    try {
      const result = await createProject();
      const projects = await getProjects();
      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProjectHandler(id) {
    try {
      setCurrentProject({});
      const result = await getProject(id);
      setCurrentProject(result.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProjectHandler(project, photos) {
    console.log(project);
    try {
      const result = await updateProject(project, photos);
      const projects = await getProjects();
      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProjectHandler(id) {
    try {
      const result = await deleteProject(id);
      const projects = await getProjects();
      setProjects(projects);
      setCurrentProject({});
    } catch (error) {
      console.log(error);
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
            // photosData={projectPhotos}
            // folderData={folders}
            onCloseProject={closeProjectHandler}
            onDeleteProject={deleteProjectHandler}
            onSaveProject={updateProjectHandler}
          />
        ) : (
          <>no project selected</>
        )}
      </div>
    </div>
  );
};

export default App;
