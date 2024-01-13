import React from 'react';

import DashboardControl from './DashboardControl.jsx';
import ProjectList from './ProjectList.jsx';

import './Dashboard.scss';

// const test_projects = [{ id: '123', name: 'test' }];

const Dashboard = ({ projects }) => {
  return (
    <div className="Dashboard">
      <DashboardControl />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Dashboard;
