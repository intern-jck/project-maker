import React, { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Project from "./components/Project/Project.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

// import ProjectList from "./components/ProjectList/ProjectList.jsx";
// import InfoForm from "./components/Forms/InfoForm.jsx";
// import PhotoForm from "./components/Forms/PhotoForm.jsx";

// import "./assets/fontawesome-free-6.6.0-web/css/all.css";

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
      console.log("get project: ", photos_data);
      // const repos_data = await getRepos(id);
      // const tags_data = await getTags(id);

      // console.log("project:", project_data.data[0]);
      // console.log("photos:", photos_data);
      // console.log("repos:", repos_data);
      // console.log("tags:", tags_data);

      setCurrentProject(project_data.data[0]);
      setCurrentProjectPhotos(photos_data);
      // setProjectRepos(repos_data);
      // setProjectTags(tags_data);
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
      // add deletePhotos
      // add deleteRepos
      // add deleteTags
      const projects = await getProjects();
      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div id="app-header">
        {/* <h1>Project Maker</h1> */}
        <Navbar />
      </div>

      <div id="app-content">
        <Dashboard
          onCreateProject={createProjectHandler}
          getProjectHandler={getProjectHandler}
          projects={projects}
        />

        <Project
          currentProject={currentProject}
          currentProjectPhotos={currentProjectPhotos}
          getProjectsHandler={getProjectsHandler}
          deleteProjectHandler={deleteProjectHandler}
          closeProjectHandler={closeProjectHandler}
        />
      </div>
    </div>
  );
}
