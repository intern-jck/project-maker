import React from 'react';
import DashboardControl from './DashboardControl.jsx';
import ProjectList from './ProjectList.jsx';
import './Dashboard.scss';

const Dashboard = ({ projects }) => {
  return (
    <div className="Dashboard">
      <DashboardControl />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Dashboard;
