import React from 'react';

import Dashboard from './components/Dashboard/Dashboard.jsx';
import Project from './components/Project/Project.jsx';

const App = () => {
  return (
    <div className="App">
      <div className="app-header">
        <h1>React App with NPM</h1>
      </div>
      <div className="app-content">
        <Dashboard />
        <Project />
      </div>
    </div>
  );
};

export default App;
