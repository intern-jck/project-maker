import React from 'react';

import Dashboard from './components/Dashboard/Dashboard.jsx';
import ProjectForm from './components/ProjectForm/ProjectForm.jsx';

const App = () => {
  return (
    <div className="App">
      <div className="app-header">
        <h1>React App with NPM</h1>
      </div>
      <div className="app-content">
        <Dashboard />
        <ProjectForm />
      </div>
    </div>
  );
};

export default App;
