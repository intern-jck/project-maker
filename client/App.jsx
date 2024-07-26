import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import ProjectForm from "./components/ProjectForm.jsx";

import "./styles/App.scss";

import {
  getProjects,
  getProject,
  createProject,
  saveProject,
  deleteProject,
} from "./api/projects.js";

import { getPhotos, savePhotos, deletePhoto } from "./api/photos.js";
import { getRepos, saveRepos, deleteRepo } from "./api/repos.js";
import { getTags, saveTags, deleteTag } from "./api/tags.js";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [projectPhotos, setProjectPhotos] = useState([]);

  useEffect(() => {
    // getProjects()
    //   .then((data) => {
    //     setProjects(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    async function get_data() {
      try {
        const projects_data = await getProjects();
        const photos_data = await getPhotos();
        const repos_data = await getRepos();
        const tags_data = await getTags();

        console.log(projects_data);
        console.log(photos_data);
        console.log(repos_data);
        console.log(tags_data);
      } catch (error) {
        console.log("first load: ", error);
      }
    }

    get_data();
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
      let result = await getProject(id);
      setCurrentProject(result.data[0]);
      result = await getPhotos(id);
      console.log("photos: ", result);
      // getPhotos
      // getRepos
      // getTags
    } catch (error) {
      console.log(error);
    }
  }

  async function saveProjectHandler(project, photos) {
    try {
      const result = await saveProject(project);

      const result_2 = await savePhotos(photos);

      const projects = await getProjects();
      setProjects(projects);
      const r = await getProject(project.id);
      const p = r.data[0];
      setCurrentProject(p);
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
