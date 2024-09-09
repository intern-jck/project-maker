import React, { useState, useEffect } from "react";

import { savePhoto, getPhotos, updatePhoto } from "../../api/photos.js";

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
  console.log("photos form: \n", photosData)
  const [newPhoto, setNewPhoto] = useState({});
  const [photos, setPhotos] = useState(photosData ? photosData : []);

  useEffect(() => {
    setPhotos(photos);
  }, [photos]);

  async function submitHandler(event) {
    event.preventDefault();
    if (!newPhoto.url) {
      return false;
    }

    newPhoto["photo_project_id"] = projectId;
    newPhoto["created_on"] = Date.now();
    newPhoto["name"] = "";

    try {
      const result = await savePhoto(newPhoto);
      const photos = await getPhotos(projectId);
      setNewPhoto("");
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

  async function removePhoto(event) {
    event.preventDefault();

    const currentPhotos = photos.slice();
    const index = event.target.getAttribute("data-photo-index");
    currentPhotos[index].photo_project_id = -1;

    const removedPhoto = currentPhotos[index];
    setPhotos(currentPhotos);

    try {
      await updatePhoto(removedPhoto.id, removedPhoto);
    } catch (error) {
      console.log(error);
    }
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
                <button onClick={removePhoto} data-photo-index={i}>
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
