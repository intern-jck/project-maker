import React from 'react';
// import './Home.css';
import Dashboard from '../../Dashboard/Dashboard.jsx';
import ProjectForm from '../../ProjectForm/ProjectForm.jsx';

const Home = () => {
  return (
    <div className="Home">
      <h1>HOME</h1>
      <Dashboard />
      <ProjectForm />
    </div>
  );
};

export default Home;
