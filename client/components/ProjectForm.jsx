import React, { useState } from "react";

import TextInput from "./Inputs/TextInput.jsx";
import SelectInput from "./Inputs/SelectInput.jsx";
import TextArea from "./Inputs/TextArea.jsx";
import DateInput from "./Inputs/DateInput.jsx";
import PhotoInput from "./Inputs/PhotoInput.jsx";
import "../styles/ProjectForm.scss";

export const ProjectForm = ({
  onAction,
  folderData,
  projectData,
  photosData,
  // onCloseProject,
  // onSaveProject,
  // onDeleteProject,
}) => {
  const [project, setProject] = useState(projectData);
  const [photos, setPhotos] = useState(photosData);
  const [newPhoto, setNewPhoto] = useState({});
  const [repos, setRepos] = useState();
  const [newRepo, setNewRepo] = useState({});
  const [tags, setTags] = useState();
  const [newTag, setNewTag] = useState({});

  // function updateFolder(event) {
  //   event.preventDefault();
  //   const { value } = event.target;
  //   console.log(value);
  //   const udpatedFolder = { folder_id: value };
  //   console.log(udpatedFolder);
  //   setProject((project) => ({
  //     ...project,
  //     ...udpatedFolder,
  //   }));
  // }

  // function saveProjectHandler(event) {
  //   event.preventDefault();
  //   onSaveProject(project, photos);
  // }

  // function deleteProjectHandler(event) {
  //   event.preventDefault();
  //   const { value } = event.target;
  //   onDeleteProject(value);
  // }

  // function closeProjectHandler() {
  //   onCloseProject();
  // }

  function updateTextInput(event) {
    event.preventDefault();

    const { name, value } = event.currentTarget;
    console.log(name, value);

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

    console.log(updatedInput);

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
    console.log(updatedPhotos);
    setPhotos(() => updatedPhotos);
  }

  function deletePhoto(event) {
    event.preventDefault();
    const index = event.target.getAttribute("data-photo-index");
    console.log("deleting photo: ", index);
    let updatedPhotos = photos.slice();
    updatedPhotos.splice(index, 1);
    console.log(updatedPhotos);
    setPhotos(() => updatedPhotos);
  }

  return (
    <div className="ProjectForm">
      <form
        id="project-form"
        className="project-form"
        onSubmit={saveProjectHandler}
      >
        <div className="form-header">
          <div>
            <SelectInput
              inputId="folder-select"
              className="folder-select"
              inputName="Folders"
              options={folderData.map((item) => {
                return [item.folder_id, item.name];
              })}
              changeHandler={updateFolder}
            />
          </div>
          <div className="form-controls">
            <button type="submit">
              <i className="fa-regular fa-floppy-disk"></i>
            </button>
            <button
              type="button"
              value={project.project_id}
              onClick={deleteProjectHandler}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
            <button type="button" onClick={closeProjectHandler}>
              <i className="fa-solid fa-square-xmark"></i>
            </button>
          </div>
        </div>

        <div className="form-content">
          <div className="form-row">
            <TextInput
              id="name-input"
              className="name-input"
              name="name"
              value={project.name}
              changeHandler={updateTextInput}
            />
            <TextInput
              id="url-input"
              className="url-input"
              name="url"
              value={projectData.url}
              changeHandler={updateTextInput}
            />
            <TextInput
              id="client-input"
              className="client-input"
              name="client"
              value={projectData.client}
              changeHandler={updateTextInput}
            />
            <TextInput
              id="client-url-input"
              className="client-url-input"
              name="client_url"
              value={projectData.client_url}
              changeHandler={updateTextInput}
            />
            <DateInput
              id="date-input"
              className="date-input"
              name="start_date"
              value={projectData.start_date}
              changeHandler={updateDate}
            />
            <DateInput
              id="date-input"
              className="date-input"
              name="end_date"
              value={projectData.end_date}
              changeHandler={updateDate}
            />
          </div>

          <div className="form-row">
            <TextInput
              id="short-input"
              className="short-input"
              name={"short"}
              value={projectData.short}
              changeHandler={updateTextInput}
            />
            <TextArea
              className="info-input"
              inputName={"info"}
              value={projectData.info}
              changeHandler={updateTextInput}
            />
          </div>
          <div className="form-row">
            <PhotoInput
              inputId="photos-input"
              className="photos-input"
              inputName="photos"
              name={newPhoto.name}
              url={newPhoto.url}
              changeHandler={updatePhoto}
              addHandler={addPhoto}
              photos={photos}
              deleteHandler={deletePhoto}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

// export default ProjectMaker;
