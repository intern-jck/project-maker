import React, { useState, useEffect } from "react";

import InfoForm from "./InfoForm.jsx";

import "../styles/ProjectForm.scss";

export default function ProjectForm({
  projectData,
  photosData,
  reposData,
  tagsData,
  onCreateProject,
  onSaveProject,
  onCloseProject,
  onDeleteProject,
}) {
  const [project, setProject] = useState(projectData ? projectData : {});

  useEffect(() => {
    setProject(projectData);
  }, [projectData]);

  return (
    <div className="ProjectForm">
      <div className="form-header">
        <button name="create-project" onClick={onCreateProject}>
          <i className="fa-solid fa-file"></i>
        </button>
        {Object.keys(projectData).length ? (
          <>
            <button name="save-project" type="submit" form="project-form">
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
            <button
              name="delete-project"
              value={projectData.id}
              onClick={onDeleteProject}
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
            // updateHandler={}
          />
        </>
      ) : (
        <h1>no project selected</h1>
      )}
    </div>
  );
}
