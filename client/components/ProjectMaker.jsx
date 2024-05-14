import React, { useState } from "react";
import "../styles/ProjectMaker.scss";

import TextInput from "./Inputs/TextInput.jsx";
import SelectInput from "./Inputs/SelectInput.jsx";
import TextArea from "./Inputs/TextArea.jsx";
import DateInput from "./Inputs/DateInput.jsx";
import PhotoInput from "./Inputs/PhotoInput.jsx";

const DEFAULT_FORM_DATA = {
  client: "default_client",
  client_url: "default_client_url",
  description: "default_description",
  end_date: "2024-01-22",
  folder_id: 0,
  name: "default_name",
  project_id: 1705963137624,
  short: "default_short",
  slug: "default_slug",
  start_date: "2024-01-22",
  url: "default_url",
  youtube_url: "default_youtube",
  github_url: "default_github",
  photos: [],
  // tech_tags: [],
};

const DEFAULT_PHOTO = {
  photo_project_id: 0,
  name: "default",
  url: "default",
};

const DEFAULT_TECH = {
  tech_id: 0,
  name: "default_tech",
  url: "default_url",
  short: "default_short",
};

const ProjectMaker = ({
  folderData,
  projectData,
  onCloseProject,
  onSaveProject,
  onDeleteProject,
}) => {
  console.log(projectData);

  const [currentFormData, setCurrentFormData] = useState(projectData);
  const [newPhoto, setNewPhoto] = useState({});

  function updateFolder(event) {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);

    const udpatedFolder = { folder_id: value };
    console.log(udpatedFolder);

    setCurrentFormData((currentFormData) => ({
      ...currentFormData,
      ...udpatedFolder,
    }));
  }

  function saveProjectHandler(event) {
    event.preventDefault();
    onSaveProject(currentFormData);
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
    setCurrentFormData((currentFormData) => ({
      ...currentFormData,
      ...updatedInput,
    }));
  }

  function updateDate(event) {
    const { name, value } = event.target;

    setCurrentFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  }

  function updatePhoto(event) {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value);

    const updatedPhoto = newPhoto;

    if (name === "photo-input_name") {
      console.log("photo name: ", value);
      updatePhoto.name = value;
    } else if (name === "photo-input-url") {
      console.log("photo url: ", value);
      updatePhoto.url = value;
    }

    console.log(updatedPhoto);
    // switch (name) {
    //   case "photo-input-name":
    //     updatedPhoto.name = value;
    //     break;

    //   case "photo-input-url":
    //     updatedPhoto.url = value;
    //     break;

    //   default:
    //     break;
    // }

    // console.log(updatePhoto);

    setNewPhoto(() => ({
      ...updatedPhoto,
    }));
  }

  function addPhoto(event) {
    event.preventDefault();
    console.log("adding photo");
    console.log(newPhoto);
    const updatedFormData = currentFormData;
    updatedFormData.photos.push(newPhoto);
    console.log(updatedFormData);

    // setNewPhoto(DEFAULT_PHOTO);

    setCurrentFormData(() => ({
      ...updatedFormData,
    }));
  }

  // function addPhoto(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();

  //   const _photos = formData ? formData.photos : undefined;

  //   if (newPhoto && _photos) {

  //     _photos.push(newPhoto);

  //     setNewPhoto({
  //       slug: '',
  //       url: '',
  //     });

  //     setFormData((formData) => ({
  //       ...formData,
  //       photos: _photos,
  //     }) as ProjectType);

  //   }

  // };

  // function deletePhoto(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   const index = event.currentTarget.getAttribute('data-photo-index');
  //   const photos = formData ? formData.photos : undefined;

  //   if (index) {

  //     if (photos) {
  //       photos.splice(parseInt(index), 1);
  //     }

  //     setFormData((formData) => ({
  //       ...formData,
  //       photos: photos,
  //     }) as ProjectType)
  //   }
  // };

  return (
    <div className="ProjectMaker">
      <form
        id="project-form"
        className="project-form"
        onSubmit={saveProjectHandler}
      >
        <div className="form-header">
          <p>
            <span>ID:</span> {projectData.project_id}
          </p>
          <div className="form-controls">
            <SelectInput
              inputId="form-folder-select"
              className="form-folder-select"
              inputName="folder_id"
              options={folderData.map((item) => {
                return [item.folder_id, item.name];
              })}
              value={currentFormData.folder_id}
              changeHandler={updateFolder}
            />
            <button type="submit">
              <i className="fa-regular fa-floppy-disk"></i>
            </button>
            <button
              type="button"
              value={currentFormData.project_id}
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
            // photos={formData.photos}
            // deleteHandler={deletePhoto}
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
  value={currentFormData.name}
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
