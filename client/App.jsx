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
  const [projectRepos, setProjectRepos] = useState([]);
  const [projectTags, setProjectTags] = useState([]);

  useEffect(() => {
    async function get_data() {
      try {
        const results = await getProjects();
        
        setProjects(results);
      } catch (error) {
        console.log("get_data: ", error);
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

      const project_data = await getProject(id);
      const photos_data = await getPhotos(id);
      const repos_data = await getRepos(id);
      const tags_data = await getTags(id);

      // console.log("projects:", project_data);
      // console.log("photos:", photos_data);
      // console.log("repos:", repos_data);
      // console.log("tags:", tags_data);

      const current_project = {
        info: project_data.data[0],
        photos: photos_data,
        repos: repos_data,
        tags: tags_data,
      };

      console.log(current_project);

      setCurrentProject(project_data.data[0]);
      setProjectPhotos(photos_data);
      setProjectRepos(repos_data);
      setProjectTags(tags_data);
    } catch (error) {
      console.log(error);
    }
  }

  async function saveProjectHandler(project, photos, repos, tags) {
    try {
      const projectResult = await saveProject(project);
      const photosResult = await savePhotos(project.id, photos);
      // const reposResult = await saveRepos(repos);
      // const tagsResult = await saveTags(tags);

      console.log(
        "saveProject: \n",
        projectResult,
        photosResult,
        // reposResult,
        // tagsResult
      );

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
          reposData={projectRepos}
          tagsData={projectTags}
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
