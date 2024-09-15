import React from "react";

import InfoForm from "../Forms/InfoForm.jsx";
import PhotoForm from "../Forms/PhotoForm.jsx";

import "./Project.scss";

export default function Project({
  onGetProjects,
  onDeleteProject,
  onCloseProject,
  currentProject,
  currentProjectPhotos,
}) {
  return (
    <div className="Project">
      {Object.keys(currentProject).length ? (
        <>
          <div className="header">
            <p>{currentProject.name}</p>
            <button
              name="delete-project"
              value={currentProject.id}
              onClick={onDeleteProject}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
            <button name="close-project" onClick={onCloseProject}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="content">
            <InfoForm
              name="project-info"
              id="project-info"
              // className="project-info"
              infoData={currentProject}
              submitForm={onGetProjects}
            />
            <PhotoForm
              name="project-photos"
              id="project-photos"
              className="project-photos"
              projectId={currentProject.id}
              projectName={currentProject.name}
              photosData={currentProjectPhotos}
              submitForm={onGetProjects}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
