import React, { useState, useEffect } from "react";

import { savePhotos } from "../../api/photos.js";

import TextInput from "../Inputs/TextInput.jsx";

import "./PhotoForm.scss";

export default function PhotoForm({
  projectId,
  projectName,
  name,
  id,
  photosData,
  submitForm,
}) {
  const [newPhoto, setNewPhoto] = useState({});
  const [photos, setPhotos] = useState(photosData ? photosData : {});

  useEffect(() => {
    setPhotos(photos);
  }, [photos]);

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const result = await savePhotos(projectId, photos);
      console.log(`result: ${result.data}`);
      submitForm();
    } catch (error) {
      console.log(error);
    }
  }

  function updateNewPhoto(event) {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const updatedPhoto = {};
    updatedPhoto[name] = value;
    setNewPhoto((newPhoto) => ({
      ...newPhoto,
      ...updatedPhoto,
    }));
  }

  function addPhoto(event) {
    event.preventDefault();
    let updatedPhotos = photos.slice();
    const updatedPhoto = newPhoto;
    updatedPhoto.created_on = Date.now();
    updatedPhoto.photo_project_id = projectId;
    updatedPhoto.name = `${projectName.replace(" ", "-")}-photo-${photos.length+1}`;
    updatedPhotos.push(updatedPhoto);
    setPhotos(() => updatedPhotos);
    setNewPhoto({});
  }

  function deletePhoto(event) {
    event.preventDefault();
    const index = event.target.getAttribute("data-photo-index");
    let updatedPhotos = photos.slice();
    updatedPhotos[index].photo_project_id = -1;
    setPhotos(() => updatedPhotos);
  }

  return (
    <div className="PhotoForm">
      <form id={id ? `${id}-form` : "photo-form"} onSubmit={submitHandler}>
        <div className="photo-form-header">
          <span>{name.replace("-", " ")}</span>

          <button
            name="save-photos"
            type="submit"
            form={id ? `${id}-form` : "photo-form"}
          >
            <i className="fa-solid fa-floppy-disk"></i>
          </button>
        </div>

        <div className="new-photo-info">
          <TextInput
            id="photo-url"
            name="photo_url"
            value={newPhoto.photo_url ? newPhoto.photo_url : ""}
            changeHandler={updateNewPhoto}
          />
          <button name="add-photo" onClick={addPhoto}>
            <i className="fa-solid fa-square-plus"></i>
          </button>
        </div>
      </form>

      <div className="photo-list">
        {photos ? (
          photos.map((photo, i) => {
            if (photo.photo_project_id === -1) {
              return;
            }

            return (
              <div key={i} className="photo-thumb">
                <div className="photo-thumb-div">
                  <img src={photo.url} alt="not found" />
                </div>
                <button onClick={deletePhoto} data-photo-index={i}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </button>
              </div>
            );

          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
