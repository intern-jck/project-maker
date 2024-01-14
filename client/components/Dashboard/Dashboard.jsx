import React from 'react';
import DashboardControl from './DashboardControl.jsx';
import ProjectList from './ProjectList.jsx';
import './Dashboard.scss';

const Dashboard = ({ dashboardData, onGetProject }) => {
  const dashboardDataMapped = dashboardData.map((item) => {
    const { project_id, name } = item;
    return { project_id, name };
  });

  return (
    <div className='Dashboard'>
      <DashboardControl />
      <ProjectList
        listData={dashboardDataMapped}
        getProjectHandler={onGetProject}
      />
    </div>
  );
};

export default Dashboard;
