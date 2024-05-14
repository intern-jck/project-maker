import React from "react";

import TextInput from "./TextInput.jsx";

export default function PhotoInput({
  inputId,
  className,
  inputName,
  name,
  url,
  changeHandler,
  addHandler,
  photos,
  deleteHandler,
}) {
  return (
    <div className={className}>
      <div className="photo-info">
        <span>{inputName}</span>
        <TextInput
          id="photo-input-name"
          className="text-input"
          name="NAME"
          value={name}
          changeHandler={changeHandler}
        />
        <TextInput
          id="photo-input-url"
          className="text-input"
          name="URL"
          value={url}
          changeHandler={changeHandler}
        />
        <button id="add-photo-button" onClick={addHandler}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </div>

      <div className="photo-list">
        {photos ? (
          photos.map((photo, i) => {
            return (
              <div key={i} className="photo-thumb">
                THUMB
                {/* <img src={photo.url} alt='not found' /> */}
                {/* <button onClick={deleteHandler} data-photo-index={i}> */}
                {/* <i class='fa-regular fa-circle-xmark'></i> */}
                {/* </button> */}
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
