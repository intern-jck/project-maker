import React, { useEffect, useState } from "react";
import ProjectList from "./components/ProjectList/ProjectList.jsx";

import InfoForm from "./components/Forms/InfoForm.jsx";
import PhotoForm from "./components/Forms/PhotoForm.jsx";

import "./styles/App.scss";

import "./assets/fontawesome-free-6.6.0-web/css/all.css";

import { getProjects, getProject, createProject } from "./api/projects.js";
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
      await getProjectHandler(results[0].id);
    } catch (error) {
      console.log("get_data: ", error);
    }
  }

  async function getProjectHandler(projectId) {
    try {
      setCurrentProject({});

      const project_data = await getProject(projectId);
      const photos_data = await getPhotos(projectId);
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

  return (
    <div className="App">
      <div id="app-header">
        <h1>NAVBAR</h1>
      </div>

      <div id="app-content">
        <div id="app-dash">
          <div id="app-dash-header">
            <button name="download-projects">
              <i className="fa-solid fa-file-export"></i>
            </button>
          </div>

          <div id="app-dash-content">
            <ProjectList
              listData={projects}
              onSelectProject={getProjectHandler}
            />
          </div>
        </div>

        <div id="app-form">
          <div id="app-form-header">
            {Object.keys(currentProject).length ? (
              <>
                <span>
                  ID: {currentProject.id} PROJECT: {currentProject.name}
                </span>
                <div>
                  <button
                    name="delete-project"
                    value={currentProject.id}
                    // onClick={deleteProjectHandler}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <button name="close-project" onClick={closeProjectHandler}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <div id="app-form-content">
            {Object.keys(currentProject).length ? (
              <>
                <InfoForm
                  name="project-info"
                  id="project-info"
                  className="project-info"
                  infoData={currentProject}
                  submitForm={getProjectsHandler}
                />
                <PhotoForm
                  projectId={currentProject.id}
                  projectName={currentProject.name}
                  name="project-photos"
                  id="project-photos"
                  className="project-photos"
                  photosData={currentProjectPhotos}
                  submitForm={getProjectsHandler}
                />
              </>
            ) : (
              <h1>no project selected</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 
 */
