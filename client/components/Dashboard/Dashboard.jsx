import React from 'react';

import DashboardControl from './DashboardControl.jsx';
import ProjectList from './ProjectList.jsx';

import './Dashboard.scss';

const test_projects = [{ id: '123', name: 'test' }];

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardControl />
      <ProjectList projects={test_projects} />
    </div>
  );
};

export default Dashboard;
