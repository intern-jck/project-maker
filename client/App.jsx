import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import ProjectForm from "./components/ProjectForm.jsx";

import {
  getProjects,
  getProject,
  createProject,
  saveProject,
  deleteProject,
} from "./api/projects.js";

import "./styles/App.scss";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [projectPhotos, setProjectPhotos] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
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

  async function saveProjectHandler(project, photos) {
    try {
      const result = await saveProject(project, photos);
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
      <div className="app-header">
        <h1>NAVBAR</h1>
      </div>

      <div className="app-content">
        <Dashboard
          dashboardData={projects}
          onSelectProject={getProjectHandler}
        />

          <ProjectForm
            projectData={currentProject}
            photosData={projectPhotos}
            onCreateProject={createProjectHandler}
            onSaveProject={saveProjectHandler}
            onDeleteProject={deleteProjectHandler}
            onCloseProject={closeProjectHandler}
          />

      </div>
    </div>
  );
};

export default App;
