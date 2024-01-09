import React from 'react';

const DashboardControl = () => {
  return (
    <div className="DashboardControl">
      <button>
        <i className="fa-solid fa-folder-plus"></i>
      </button>
      <button>
        <i className="fa-solid fa-file-export"></i>
      </button>
      <button>
        <i className="fa-solid fa-folder-minus"></i>
      </button>
    </div>
  );
};

export default DashboardControl;
