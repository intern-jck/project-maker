import React from "react";

import TextInput from "./TextInput.jsx";

export default function RepoInput({
  name,
  id,
  className,
  repoName,
  repoUrl,
  repos,
  changeHandler,
  addHandler,
  deleteHandler,
}) {
  return (
    <div id={id} className={className ? className : "repo-input"}>
      <div className="repo-header">
        <span>{name.replace("-", " ")}</span>
        <button name="add-repo-button" onClick={addHandler}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </div>

      <div className="repo-info">
        <TextInput
          name={"repo-name"}
          value={repoName}
          changeHandler={changeHandler}
        />
        <TextInput
          name={"repo-url"}
          value={repoUrl}
          changeHandler={changeHandler}
        />
      </div>

      <div className="repo-list">
        {repos ? (
          repos.map((repo, i) => {
            return (
              <div key={i} className="repo">
                {repo.name}
                <button onClick={deleteHandler} data-repo-index={i}>
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
