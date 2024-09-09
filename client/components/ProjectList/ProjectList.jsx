import React from "react";
import "./ProjectList.scss";

export default function ProjectList({ listData, onSelectProject }) {

  function onSelectProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    onSelectProject(value);
  }

  return (
    <div className="project-list">
      {
        listData.map((project, i) => {
          return (
            <button
              name={"project-button"}
              key={project.id}
              value={project.id}
              onClick={onSelectProjectHandler}
            >
              <i className="fa-solid fa-file"></i>
              <p>{project.name}</p>
            </button>
          );
        })
      }
    </div>
  );
}
