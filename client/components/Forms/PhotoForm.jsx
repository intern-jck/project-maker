import React, { useState, useEffect } from "react";

import { savePhotos } from "../../api/photos.js";

import TextInput from "../Inputs/TextInput.jsx";

import "./PhotoForm.scss";

export default function PhotoForm({
  name,
  id,
  className,
  photosData,
  submitForm,
  // photoName,
  // photoUrl,
  // addHandler,
  // changeHandler,
  // deleteHandler,
}) {
  const [newPhoto, setNewPhoto] = useState({});
  const [photos, setPhotos] = useState(photosData ? photosData : {});

  useEffect(() => {
    setPhotos(photos);
  }, [photos]);

  async function submitHandler(event) {
    event.preventDefault();
    console.log("saving photos");
    // try {
    //   const result = await savePhotos(photos);
    //   console.log(`result: ${result.data}`);
    //   submitForm();
    // } catch (error) {
    //   console.log(error);
    // }
  }

  function addPhoto() {
    console.log("add photo");
  }

  function updateTextInput(event) {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    let updatedInfo = {};

    // If changing the name, maker sure to update the slug for correct routing
    // if (name === "photo-name") {
    //   updatedInfo = {
    //     [name]: value,
    //     slug: value.toLowerCase().split(" ").join("-"),
    //   };
    // }

    // if (name.includes("-")) {
    //   updatedInfo = {
    //     [name.replace("-", "_")]: value,
    //   };
    // } else {
    // }

    updatedInfo = { [name]: value };

    // Update the current form data
    setInfo((info) => ({
      // ...info,
      ...updatedInfo,
    }));
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
          {/* <TextInput
            id="photo-name"
            name="photo_name"
            value={photoName ? photoName : ""}
            changeHandler={updateTextInput}
          /> */}
          <TextInput
            id="photo-url"
            name="photo_url"
            // value={photoUrl ? photoUrl : ""}
            // changeHandler={updateTextInput}
          />
          <button name="add-photo" onClick={addPhoto}>
            <i className="fa-solid fa-square-plus"></i>
          </button>
        </div>
      </form>

      <div className="photo-list">
        {photos ? (
          photos.map((photo, i) => {
            return (
              <div key={i} className="photo-thumb">
                <div className="photo-thumb-div">
                  <img src={photo.url} alt="not found" />
                </div>
                {/* <button onClick={deleteHandler} data-photo-index={i}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </button> */}
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
