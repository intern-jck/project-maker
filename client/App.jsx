import React from 'react';

import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProjectMaker from './components/ProjectMaker/ProjectMaker.jsx';

const App = () => {
  return (
    <div className="App">
      <div className="app-content">
        <Dashboard />
        <ProjectMaker />
      </div>
    </div>
  );
};

export default App;
