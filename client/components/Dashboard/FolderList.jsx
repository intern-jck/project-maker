import React from 'react';

import Folder from './Folder.jsx';

const FolderList = ({ projects }) => {
  console.log(projects);

  // function selectProjectHandler(event) {
  //   event.preventDefault();
  //   const { value } = event.currentTarget;
  //   selectProject(value);
  // }

  return (
    <div className="FolderList">
      {projects.length ? (
        projects.map((project, i) => {
          return <Folder key={i} />;
        })
      ) : (
        <>no data</>
      )}
    </div>
  );
};

export default FolderList;
