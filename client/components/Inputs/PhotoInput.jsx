import React from "react";
import TextInput from "./TextInput.jsx";

export default function PhotoInput({
  name,
  id,
  className,
  photoName,
  photoUrl,
  photos,
  addHandler,
  changeHandler,
  deleteHandler,
}) {
  return (
    <div id={id} className={className ? className : "photo-input"}>
      <div className="photo-header">
        <span>{name.replace("-", " ")}</span>
        <button name="add-photo-button" onClick={addHandler}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </div>

      <div className="photo-info">
        <TextInput
          id="photo-input-name"
          name="photo-input-name"
          value={photoName ? photoName : ""}
          changeHandler={changeHandler}
        />
        <TextInput
          id="photo-input-url"
          name="photo-input-url"
          value={photoUrl ? photoUrl : ""}
          changeHandler={changeHandler}
        />
      </div>

      <div className="photo-list">
        {photos ? (
          photos.map((photo, i) => {
            return (
              <div key={i} className="photo-thumb">
                <div className="photo-thumb-div">
                  <img src={photo.url} alt="not found" />
                </div>
                <button onClick={deleteHandler} data-photo-index={i}>
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
