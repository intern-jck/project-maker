import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard.jsx';
import ProjectMaker from './components/ProjectMaker.jsx';

const SERVER_URL = 'http://127.0.0.1:3000';
const DEFAULT_FOLDER = { folder_id: 0, folder_name: 'ALL' };

const App = () => {
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(DEFAULT_FOLDER);
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
  // I.E. deleteProject(value) ==> DELETE /project?project_id=[value]

  /**
   *   FOLDER REQUESTS
   */
  function getFolders() {
    fetch(`${SERVER_URL}/folders`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
        getFolders();
        getProjects();
      })
      .catch();
  }

  /**
   *   PROJECT REQUESTS
   */
  function getCreateProject() {
    fetch(`${SERVER_URL}/create_project`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getFolders();
        getProjects();
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
        setCurrentProject(data.data.length ? data.data[0] : {});
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

  function getFolderProjects(value) {
    console.log('getting projects in', value);
    if (value === 'ALL') {
      setCurrentFolder(DEFAULT_FOLDER);
    }

    fetch(`${SERVER_URL}/folder_projects?folder_id=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjects(data.data);
        // Use for testing
        setCurrentProject(data.data.length ? data.data[0] : {});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function putProject(data) {
    console.log(data);

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(`${SERVER_URL}/project`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
        getFolders();
        getProjects();
        setCurrentProject({});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * PHOTO REQUESTS
   */
  function getPhotos(projectId) {
    fetch(`/photos/${projectId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log('getPhotos', error);
      });
  }

  // App Functions
  function closeProject() {
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
          onSelectFolder={getFolderProjects}
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
