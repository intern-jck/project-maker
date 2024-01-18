import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard.jsx';
import ProjectMaker from './components/ProjectMaker.jsx';

// import useFetch from './hooks/useFetch.js';

// import {
//   getFolders,
//   getCreateFolder,
//   deleteFolder,
//   getCreateProject,
//   getProjects,
//   getProject,
//   putProject,
//   deleteProject,
// } from './services/http.js';

const SERVER_URL = 'http://127.0.0.1:3000';

const App = () => {
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({});
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});

  // const [projects] = useFetch(`${SERVER_URL}/projects`);

  // console.log(projects);
  useEffect(() => {
    // getFolders()
    //   .then((data) => setFolders(data))
    //   .catch((error) => console.log(error));

    fetch(SERVER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getFolders();
        getProjects(setProjects);
      })
      .catch();
  }, []);

  // Function names reflect the type of request they send and the endpoint.
  // I.E. getFolders ==> GET /folders
  // I.E. getCreateProject ==> GET /create_project

  // Folder Functions
  function getFolders() {
    fetch(`${SERVER_URL}/folders`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('folders', data.data);
        setFolders(data.data);
      })
      .catch();
  }

  function getCreateFolder(value) {
    fetch(`${SERVER_URL}/create_folder?folder_name=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        getFolders();
        getProjects();
      })
      .catch();
  }

  function deleteFolder(value) {
    const options = {
      method: 'DELETE',
    };

    fetch(`${SERVER_URL}/folder/${value}`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getFolders();
        getProjects();
      })
      .catch();
  }

  // Project Functions
  function getCreateProject() {
    fetch(`${SERVER_URL}/create_project`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getFolders();
        getProjects();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getProjects() {
    fetch(`${SERVER_URL}/projects`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjects(data.data);
        // Use for testing
        // setCurrentProject(data.data.length ? data.data[0] : {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getProject(projectId) {
    fetch(`${SERVER_URL}/project?project_id=${projectId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrentProject(data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function putProject(data) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(`${SERVER_URL}/save_project`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getProjects();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteProject(projectId) {
    const options = {
      method: 'DELETE',
    };

    fetch(`${SERVER_URL}/project/${projectId}`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getFolders();
        getProjects();
        setCurrentProject({});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // App Functions
  function closeProject() {
    console.log('Close Project');
    setCurrentProject({});
  }

  return (
    <div className='App'>
      <div className='app-content'>
        <Dashboard
          folderData={folders}
          dashboardData={projects}
          onCreateFolder={getCreateFolder}
          onDeleteFolder={deleteFolder}
          onCreateProject={getCreateProject}
          onGetProject={getProject}
        />

        {Object.keys(currentProject).length ? (
          <ProjectMaker
            folderData={folders}
            projectData={currentProject}
            onCloseProject={closeProject}
            onSaveProject={putProject}
            onDeleteProject={deleteProject}
          />
        ) : (
          <>no project selected</>
        )}
      </div>
    </div>
  );
};

export default App;
