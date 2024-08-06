import React, { useEffect, useState } from "react";
import ProjectList from "./components/ProjectList.jsx";
// import Project from "./components/Project/Project.jsx";

import InfoForm from "./components/Forms/InfoForm.jsx";

import "./styles/App.scss";
import "./assets/fontawesome-free-6.6.0-web/css/all.css";

import { getProjects, getProject, createProject } from "./api/projects.js";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    // async function get_data() {
    //   try {
    //     const results = await getProjects();
    //     console.log(results[0]);
    //     const proj = await getProject(results[0].id);
    //     setCurrentProject(proj.data[0]);
    //     console.log(proj);
    //     setProjects(results);
    //   } catch (error) {
    //     console.log("get_data: ", error);
    //   }
    // }

    // get_data();
    getProjectsHandler();
  }, []);

  async function createProjectHandler() {
    try {
      const result = await createProject();
      const projects = await getProjects();
      // console.log(result, projects);

      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProjectsHandler() {
    try {
      const results = await getProjects();
      // console.log(results[0]);
      const proj = await getProject(results[0].id);
      setCurrentProject(proj.data[0]);
      // console.log(proj);
      setProjects(results);
    } catch (error) {
      console.log("get_data: ", error);
    }
  }

  async function getProjectHandler(event) {
    console.log("selected: ", event.target.value);
    const { name, value } = event.target;
    try {
      setCurrentProject({});

      const project_data = await getProject(value);

      // const photos_data = await getPhotos(id);
      // const repos_data = await getRepos(id);
      // const tags_data = await getTags(id);

      console.log("project:", project_data.data[0]);
      // console.log("photos:", photos_data);
      // console.log("repos:", repos_data);
      // console.log("tags:", tags_data);

      // const current_project = {
      //   info: project_data.data[0],
      //   // photos: photos_data,
      //   // repos: repos_data,
      //   // tags: tags_data,
      // };

      // console.log(current_project);

      setCurrentProject(project_data.data[0]);
      // setProjectPhotos(photos_data);
      // setProjectRepos(repos_data);
      // setProjectTags(tags_data);
    } catch (error) {
      console.log(error);
    }
  }

  function closeProjectHandler() {
    setCurrentProject({});
  }

  function onUpdate() {
    console.log("updating project");
    // getProjectsHandler();
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
              // updateHandler={onUpdate}
            />
          </div>
        </div>

        <div id="app-form">
          <div id="app-form-header">
            {Object.keys(currentProject).length ? (
              <>
                {/* <button name="save-project" type="submit" form="project-form">
                  <i className="fa-solid fa-floppy-disk"></i>
                </button> */}
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
            {/* <Project
              projectData={currentProject}
              photosData={projectPhotos}
              reposData={projectRepos}
              tagsData={projectTags}
              onFormSubmission={getProjectsHandler}
              onCreateProject={createProjectHandler}
              onCloseProject={closeProjectHandler}
            /> */}

            {Object.keys(currentProject).length ? (
              <>
                <InfoForm
                  name="project-info"
                  id="project-info"
                  className="project-info"
                  infoData={currentProject}
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
