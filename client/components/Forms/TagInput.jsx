import React from "react";

import TextInput from "../Inputs/TextInput.jsx";

export default function TagInput({
  name,
  id,
  className,
  tagName,
  tagUrl,
  tags,
  changeHandler,
  addHandler,
  deleteHandler,
}) {
  return (
    <div id={id} className={className ? className : "tag-input"}>
      <div className="tag-header">
        <span>{name.replace("-", " ")}</span>
        <button name="add-tag-button" onClick={addHandler}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </div>

      <div className="tag-info">
        <TextInput
          id="tag-input-name"
          name={"tag-name"}
          value={tagName}
          changeHandler={changeHandler}
        />
      </div>

      <div className="tag-list">
        {tags ? (
          tags.map((tag, i) => {
            return (
              <div key={i} className="tag" data-tag-index={i}>
                {tag.name}
                <button onClick={deleteHandler} data-tag-index={i}>
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
