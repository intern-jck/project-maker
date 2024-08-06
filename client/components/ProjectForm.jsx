import React, { useState, useEffect } from "react";

import InfoForm from "./InfoForm.jsx";

import "../styles/ProjectForm.scss";

import {
  saveProject,
  deleteProject,
} from "../api/projects.js";

export default function ProjectForm({
  projectData,
  // photosData,
  // reposData,
  // tagsData,
  getProjectsHandler,
  onFormSubmission,
  onCreateProject,
  onCloseProject,
}) {
  // console.log(projectData)
  const [project, setProject] = useState(projectData ? projectData : {});

  // console.log("render app");
  useEffect(() => {
    setProject(projectData);
  }, [projectData]);

  async function saveProjectHandler(project, photos, repos, tags) {
    // console.log(project, photos);

    try {
      console.log(`save project info`);
      // const projectResult = await saveProject(project);
      // const photosResult = await savePhotos(project.id, photos);
      // const reposResult = await saveRepos(repos);
      // const tagsResult = await saveTags(tags);


      // const projects = await getProjects();
      // setProjects(projects);

      // const r = await getProject(project.id);
      // const p = r.data[0];
      // setCurrentProject(p);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProjectHandler(id) {
    try {
      const result = await deleteProject(id);
      // const projects = await getProjects();
      // setProjects(projects);
      // setCurrentProject({});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="ProjectForm">
      <div className="form-header">
        {/* <button name="create-project" onClick={onCreateProject}>
          <i className="fa-solid fa-file"></i>
        </button> */}
        {Object.keys(projectData).length ? (
          <>
            {/* <button name="save-project" type="submit" form="project-form">
              <i className="fa-solid fa-floppy-disk"></i>
            </button> */}
            <button
              name="delete-project"
              value={projectData.id}
              onClick={deleteProjectHandler}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
            <span>
              PROJECT: {projectData.name} ID: {projectData.id}
            </span>
            <button name="close-project" onClick={onCloseProject}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      {Object.keys(project).length ? (
        <>
          <InfoForm
            name="project-info"
            id="project-info"
            className="project-info"
            infoData={project}
            submitHandler={onFormSubmission}
          />
        </>
      ) : (
        <h1>no project selected</h1>
      )}
    </div>
  );
}
