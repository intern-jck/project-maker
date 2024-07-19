import React, { useState } from "react";

import TextInput from "./Inputs/TextInput.jsx";
import TextArea from "./Inputs/TextArea.jsx";
import DateInput from "./Inputs/DateInput.jsx";
import PhotoInput from "./Inputs/PhotoInput.jsx";
import "../styles/ProjectForm.scss";

export default function ProjectForm({
  projectData,
  photosData,
  onCreateProject,
  onSaveProject,
  onCloseProject,
  onDeleteProject,
}) {

  const [project, setProject] = useState(projectData);
  const [photos, setPhotos] = useState(photosData);
  const [newPhoto, setNewPhoto] = useState({});

  function saveProjectHandler(event) {
    event.preventDefault();
    onSaveProject(project, photos);
  }

  function deleteProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    console.log("delete", value);
    onDeleteProject(value);
  }

  // Functions to update form
  function updateTextInput(event) {
    event.preventDefault();

    const { name, value } = event.currentTarget;

    let updatedInput = {};

    // If changing the name, maker sure to update the slug for correct routing
    if (name === "name") {
      updatedInput = {
        [name]: value,
        slug: value.toLowerCase().split(" ").join("-"),
      };
    } else {
      updatedInput = { [name]: value };
    }

    // Update the current form data
    setProject((project) => ({
      ...project,
      ...updatedInput,
    }));
  }

  function updateDate(event) {
    const { name, value } = event.target;

    setProject((project) => ({
      ...project,
      [name]: value,
    }));
  }

  function updatePhoto(event) {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedPhoto = newPhoto;

    if (name === "photo-input_name") {
      updatedPhoto.name = value;
    } else if (name === "photo-input-url") {
      updatedPhoto.url = value;
    }

    updatedPhoto.photo_project_id = project.project_id;

    setNewPhoto(() => ({
      ...updatedPhoto,
    }));
  }

  function addPhoto(event) {
    event.preventDefault();
    let updatedPhotos = photos.slice();
    updatedPhotos.push(newPhoto);
    setPhotos(() => updatedPhotos);
  }

  function deletePhoto(event) {
    event.preventDefault();
    const index = event.target.getAttribute("data-photo-index");
    let updatedPhotos = photos.slice();
    updatedPhotos.splice(index, 1);
    setPhotos(() => updatedPhotos);
  }

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
              onClick={deleteProjectHandler}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
            <button name="close-project" onClick={onCloseProject}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>

      {Object.keys(projectData).length ? (
        <form
          id="project-form"
          className="project-form"
          onSubmit={saveProjectHandler}
        >
          <div className="form-info">
            <span>project info</span>
            <TextInput
              name="name"
              value={projectData.name}
              changeHandler={updateTextInput}
            />
            <TextInput
              name="url"
              value={projectData.url}
              changeHandler={updateTextInput}
            />
            <TextInput
              name="client"
              value={projectData.client}
              changeHandler={updateTextInput}
            />
            <TextInput
              name="client-url"
              value={projectData.client_url}
              changeHandler={updateTextInput}
            />
            <DateInput
              name="start-date"
              value={projectData.start_date}
              changeHandler={updateDate}
            />
            <DateInput
              name="end-date"
              value={projectData.end_date}
              changeHandler={updateDate}
            />
            <TextInput
              name={"short"}
              value={projectData.short}
              changeHandler={updateTextInput}
            />
            <TextArea
              name={"info"}
              value={projectData.info}
              changeHandler={updateTextInput}
            />
          </div>

          <PhotoInput
            name="project-photos"
            id="photos-input"
            className="photos-input"
            photoName={newPhoto.name}
            photoUrl={newPhoto.url}
            changeHandler={updatePhoto}
            addHandler={addPhoto}
            photos={photos}
            deleteHandler={deletePhoto}
          />
        </form>
      ) : (
        <h1>no project selected</h1>
      )}
    </div>
  );
}
