import React from "react";
import "./ProjectList.scss";

export default function ProjectList({ listData, onSelectProject }) {

  return (
    <div className="project-list">
      {listData.length ? (
        listData.map((project, i) => {
          return (
            <button
              name={"project-button"}
              key={project.id}
              value={project.id}
              onClick={onSelectProject}
            >
              <i className="fa-solid fa-file"></i>
              <p>{project.name}</p>
            </button>
          );
        })
      ) : (
        <h1>no projects</h1>
      )}
    </div>
  );
}
