import React, { useState, useEffect } from "react";

import InfoForm from "../Forms/InfoForm.jsx";
import PhotoForm from "../Forms/PhotoForm.jsx";

import "./Project.scss";

export default function Project({
  currentProject,
  currentProjectPhotos,
  getProjectsHandler,
  deleteProjectHandler,
  closeProjectHandler
}) {

  return (
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
                onClick={deleteProjectHandler}
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
          <h2>no project selected</h2>
        )}
      </div>
    </div>
  );
}
