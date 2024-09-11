import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import ProjectList from "../ProjectList/ProjectList.jsx";

export default function Dashboard({ onCreateProject, getProjectHandler, projects }) {

    function onCreateProjectHandler() {
        onCreateProject();
    }

    return (
        <div id="app-dash">
            <div id="app-dash-header">
                <button name="download-projects">
                    <i className="fa-solid fa-file-export"></i>
                </button>
                <button name="create-project" onClick={onCreateProject}>
                    <i className="fa-solid fa-file"></i>
                </button>
            </div>

            <div id="app-dash-content">
                {projects.length ? (
                    <ProjectList
                        listData={projects}
                        onSelectProject={getProjectHandler}
                    />
                ) : (
                    <h2>no projects</h2>
                )}
            </div>
        </div>
    );
}
