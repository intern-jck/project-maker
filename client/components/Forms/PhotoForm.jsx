import React, { useState, useEffect } from "react";

import { savePhoto, getPhotos } from "../../api/photos.js";

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
  const [photos, setPhotos] = useState(photosData ? photosData : []);

  useEffect(() => {
    setPhotos(photos);
  }, [photos]);

  async function submitHandler(event) {
    event.preventDefault();
    console.log(newPhoto);
    if (!newPhoto.url) {
      return false;
    }

    newPhoto["photo_project_id"] = projectId;
    newPhoto["created_on"] = Date.now();
    newPhoto["name"] = "";

    console.log(newPhoto);

    try {
      const result = await savePhoto(newPhoto);
      const photos = await getPhotos(projectId);
      setPhotos(photos);
      submitForm();
    } catch (error) {
      console.log(error);
    }
  }

  function updateNewPhoto(event) {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    const updatedPhoto = {};

    updatedPhoto["url"] = value;
    updatedPhoto["name"] = `${projectName
      .toLowerCase()
      .replace(" ", "-")}-photo-${photos.length}`;

    setNewPhoto((newPhoto) => ({
      ...newPhoto,
      ...updatedPhoto,
    }));
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
        </div>

        <div className="new-photo-info">
          <TextInput
            id="photo-url"
            name="url"
            value={newPhoto.url ? newPhoto.url : ""}
            changeHandler={updateNewPhoto}
          />
          <button
            name="save-photos"
            type="submit"
            form={id ? `${id}-form` : "photo-form"}
          >
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
