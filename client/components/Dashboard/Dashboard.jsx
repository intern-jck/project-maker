import React from 'react';
import DashboardControl from './DashboardControl.jsx';
import ProjectList from './ProjectList.jsx';
import './Dashboard.scss';

const Dashboard = ({ data, clickHandler }) => {
  return (
    <div className="Dashboard">
      <DashboardControl />
      <ProjectList data={data} clickHandler={clickHandler} />
    </div>
  );
};

export default Dashboard;
