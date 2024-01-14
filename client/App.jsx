import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProjectMaker from './components/ProjectMaker/ProjectMaker.jsx';

const SERVER_URL = 'http://127.0.0.1:3000';
// const project_data = [
//   {
//     project_id: 1705179601047,
//     slug: null,
//     name: null,
//     url: null,
//     client: null,
//     client_rul: null,
//     start_date: null,
//     end_date: null,
//     short: null,
//     description: null,
//   },
//   {
//     project_id: 1705179615353,
//     slug: null,
//     name: null,
//     url: null,
//     client: null,
//     client_rul: null,
//     start_date: null,
//     end_date: null,
//     short: null,
//     description: null,
//   },
//   {
//     project_id: 1705179663360,
//     slug: null,
//     name: null,
//     url: null,
//     client: null,
//     client_rul: null,
//     start_date: null,
//     end_date: null,
//     short: null,
//     description: null,
//   },
//   {
//     project_id: 1705179727455,
//     slug: 'test_slug',
//     name: null,
//     url: null,
//     client: null,
//     client_rul: null,
//     start_date: null,
//     end_date: null,
//     short: null,
//     description: null,
//   },
//   {
//     project_id: 1705179778465,
//     slug: 'test_slug',
//     name: 'test_name',
//     url: 'test_url',
//     client: 'test_client',
//     client_rul: 'test_client_url',
//     start_date: 'test_start',
//     end_date: 'test_end',
//     short: 'test_short',
//     description: 'test_description',
//   },
// ];

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [currentFolder, setCurrentFolder] = useState({});

  useEffect(() => {
    fetch(SERVER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjects(data.data);
      })
      .catch();
  }, []);

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
        console.log('non null');
        setCurrentProject(nonNullData[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function closeProject() {
    console.log('Close Project');
    setCurrentProject({});
  }

  return (
    <div className='App'>
      <div className='app-content'>
        {projects.length ? (
          <Dashboard dashboardData={projects} onGetProject={getProject} />
        ) : (
          <>no projects found</>
        )}
        {Object.keys(currentProject).length ? (
          <ProjectMaker
            projectData={currentProject}
            onCloseProject={closeProject}
          />
        ) : (
          <>no project selected</>
        )}
      </div>
    </div>
  );
};

export default App;
