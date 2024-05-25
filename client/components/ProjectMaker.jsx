import React, { useState } from "react";
import "../styles/ProjectMaker.scss";

import TextInput from "./Inputs/TextInput.jsx";
import SelectInput from "./Inputs/SelectInput.jsx";
import TextArea from "./Inputs/TextArea.jsx";
import DateInput from "./Inputs/DateInput.jsx";
import PhotoInput from "./Inputs/PhotoInput.jsx";

const ProjectMaker = ({
  folderData,
  projectData,
  photosData,
  onCloseProject,
  onSaveProject,
  onDeleteProject,
}) => {
  // console.log(projectData, photosData);
  // return;

  const [project, setProject] = useState(projectData);
  const [photos, setPhotos] = useState(photosData);
  const [newPhoto, setNewPhoto] = useState({});
  const [repos, setRepos] = useState();
  const [newRepo, setNewRepo] = useState({});
  const [tags, setTags] = useState();
  const [newTag, setNewTag] = useState({});

  function updateFolder(event) {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);

    const udpatedFolder = { folder_id: value };
    console.log(udpatedFolder);

    setProject((project) => ({
      ...project,
      ...udpatedFolder,
    }));
  }

  function saveProjectHandler(event) {
    event.preventDefault();
    onSaveProject(project);
  }

  function deleteProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    onDeleteProject(value);
  }

  function closeProjectHandler() {
    onCloseProject();
  }

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
    // const photos = formData ? formData.photos : undefined;

    // if (index) {

    //   if (photos) {
    //     photos.splice(parseInt(index), 1);
    //   }

    //   setFormData((formData) => ({
    //     ...formData,
    //     photos: photos,
    //   }) as ProjectType)
    // }
  }

  return (
    <div className="ProjectMaker">
      <form
        id="project-form"
        className="project-form"
        onSubmit={saveProjectHandler}
      >
        <div className="form-header">
          <p>
            <span>ID:</span> {project.project_id}
          </p>
          <div className="form-controls">
            <SelectInput
              inputId="form-folder-select"
              className="form-folder-select"
              inputName="folder_id"
              options={folderData.map((item) => {
                return [item.folder_id, item.name];
              })}
              value={project.folder_id}
              changeHandler={updateFolder}
            />
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
      </form>
    </div>
  );
};

export default ProjectMaker;

// scratch
{
  /* 

<div className='form-row'>
<TextInput
  inputId='name-input'
  className='name-input'
  inputName={'name'}
  value={project.name}
  changeHandler={updateTextInput}
/>
<TextInput
  inputId='url-input'
  className='url-input'
  inputName={'url'}
  value={projectData.url}
  changeHandler={updateTextInput}
/>
<TextInput
  inputId='client-input'
  className='client-input'
  inputName={'client'}
  value={projectData.client}
  changeHandler={updateTextInput}
/>
<TextInput
  inputId='client-url-input'
  className='client-url-input'
  inputName={'client_url'}
  value={projectData.client_url}
  changeHandler={updateTextInput}
/>
<DateInput
  inputId='date-input'
  className='date-input'
  inputName={'start_date'}
  dateValue={projectData.start_date}
  changeHandler={updateDate}
/>
<DateInput
  inputId='date-input'
  className='date-input'
  inputName={'end_date'}
  dateValue={projectData.end_date}
  changeHandler={updateDate}
/>
</div>

<div className='form-row'>
<TextInput
  inputId='short-input'
  className='short-input'
  inputName={'short'}
  value={projectData.short}
  changeHandler={updateTextInput}
/>
<TextArea
  className='info-input'
  inputName={'info'}
  value={projectData.info}
  changeHandler={updateTextInput}
/>
</div> 

*/
}
