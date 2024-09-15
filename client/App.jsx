import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Project from "./components/Project/Project.jsx";

import "./styles/App.scss";

import {
  createProject,
  getProjects,
  getProject,
  deleteProject,
} from "./api/projects.js";

import { getPhotos } from "./api/photos.js";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [currentProjectPhotos, setCurrentProjectPhotos] = useState([]);

  useEffect(() => {
    getProjectsHandler();
  }, []);

  async function createProjectHandler() {
    try {
      await createProject();
      const projects = await getProjects();
      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProjectsHandler() {
    try {
      const results = await getProjects();
      setProjects(results);

      // use for testing
      // console.log(results);
      // if (!results[0]) {
      //   return;
      // }
      // await getProjectHandler(results[0].id);
    } catch (error) {
      console.log("get_data: ", error);
    }
  }

  async function getProjectHandler(projectId) {
    try {
      setCurrentProject({});

      const project_data = await getProject(projectId);
      const photos_data = await getPhotos(projectId);

      setCurrentProject(project_data.data[0]);
      setCurrentProjectPhotos(photos_data);
    } catch (error) {
      console.log(error);
    }
  }

  function closeProjectHandler() {
    setCurrentProject({});
  }

  async function deleteProjectHandler() {
    closeProjectHandler();
    try {
      await deleteProject(currentProject.id);
      const projects = await getProjects();
      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div id="app-header">
        <Navbar />
      </div>

      <div id="app-content">
        <Dashboard
          onCreateProject={createProjectHandler}
          onGetProject={getProjectHandler}
          projects={projects}
        />

        <Project
          onGetProjects={getProjectsHandler}
          onDeleteProject={deleteProjectHandler}
          onCloseProject={closeProjectHandler}
          currentProject={currentProject}
          currentProjectPhotos={currentProjectPhotos}
        />
      </div>
    </div>
  );
}
