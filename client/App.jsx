import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProjectMaker from './components/ProjectMaker/ProjectMaker.jsx';

const SERVER_URL = 'http://127.0.0.1:3000';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({});

  useEffect(() => {
    fetch(SERVER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getAllFolders();
        getAllProjects();
      })
      .catch();
  }, []);

  // Folder Functions
  function getAllFolders() {
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

  function createFolder(value) {
    fetch(`${SERVER_URL}/create_folder?folder_name=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        getAllFolders();
        getAllProjects();
      })
      .catch();
  }

  function deleteFolder(value) {
    console.log('delete folder:', value);
    const options = {
      method: 'DELETE',
    };

    fetch(`${SERVER_URL}/folder/${value}`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getAllFolders();
        getAllProjects();
      })
      .catch();
  }

  // Project Functions
  function createProject() {
    fetch(`${SERVER_URL}/create_project`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getAllFolders();
        getAllProjects();
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getAllProjects() {
    fetch(`${SERVER_URL}/projects`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjects(data.data);
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
        // clean out null values
        const nonNullData = data.data.map((item) => {
          for (let key in item) {
            if (item[key] === null) {
              item[key] = 'DEFAULT';
            }
          }
          return item;
        });
        setCurrentProject(nonNullData[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function saveProject(data) {
    console.log('Saving', data);
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
        getAllProjects();
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
        getAllFolders();
        getAllProjects();
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
          onCreateFolder={createFolder}
          onDeleteFolder={deleteFolder}
          onCreateProject={createProject}
          onGetProject={getProject}
        />

        {Object.keys(currentProject).length ? (
          <ProjectMaker
            projectData={currentProject}
            onCloseProject={closeProject}
            onSaveProject={saveProject}
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
