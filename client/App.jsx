import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProjectMaker from './components/ProjectMaker/ProjectMaker.jsx';

const SERVER_URL = 'http://127.0.0.1:3000';
const project_data = [
  {
    project_id: 1705179601047,
    slug: null,
    name: null,
    url: null,
    client: null,
    client_rul: null,
    start_date: null,
    end_date: null,
    short: null,
    description: null,
  },
  {
    project_id: 1705179615353,
    slug: null,
    name: null,
    url: null,
    client: null,
    client_rul: null,
    start_date: null,
    end_date: null,
    short: null,
    description: null,
  },
  {
    project_id: 1705179663360,
    slug: null,
    name: null,
    url: null,
    client: null,
    client_rul: null,
    start_date: null,
    end_date: null,
    short: null,
    description: null,
  },
  {
    project_id: 1705179727455,
    slug: 'test_slug',
    name: null,
    url: null,
    client: null,
    client_rul: null,
    start_date: null,
    end_date: null,
    short: null,
    description: null,
  },
  {
    project_id: 1705179778465,
    slug: 'test_slug',
    name: 'test_name',
    url: 'test_url',
    client: 'test_client',
    client_rul: 'test_client_url',
    start_date: 'test_start',
    end_date: 'test_end',
    short: 'test_short',
    description: 'test_description',
  },
];

const App = () => {
  const [projectData, setProjectData] = useState([]);
  const [currentProject, setCurrentProject] = useState();
  const [currentFolder, setCurrentFolder] = useState({});

  useEffect(() => {
    fetch(SERVER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('fetch', data);
        setProjectData(data.data);
      })
      .catch();
  }, []);

  function getProject(projectId) {
    console.log(projectId);
    fetch(`${SERVER_URL}/project?project_id=${projectId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCurrentProject(data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <div className="app-content">
        <Dashboard data={projectData} clickHandler={getProject} />
        {currentProject ? <ProjectMaker data={currentProject} /> : <></>}
      </div>
    </div>
  );
};

export default App;
