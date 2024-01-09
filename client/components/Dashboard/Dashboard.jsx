import React from 'react';

import DashboardControl from './DashboardControl.jsx';
import FolderList from './FolderList.jsx';

import './Dashboard.scss';

const test_projects = [{ id: '123', name: 'test' }];

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h2>DASHBOARD</h2>
      <DashboardControl />
      <FolderList projects={test_projects} />
    </div>
  );
};

export default Dashboard;
