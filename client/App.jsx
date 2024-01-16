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

  // Functions to handle HTTP Requests
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

  function getAllFolders() {
    fetch(`${SERVER_URL}/folders`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setFolders(data.data);
      })
      .catch();
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
    console.log('Deleting', projectId);

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ project_id: projectId }),
    };

    fetch(`${SERVER_URL}/project`, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        getAllProjects();
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
