import React from 'react';

const ProjectControls = () => {
  return (
    <div className="ProjectControls">
      <div className="control-header">
        <h4>Project Name: NAME</h4>
        <h4>Collection Name: COLLECTION</h4>
      </div>

      <div className="control-buttons">
        <button>
          <i className="fa-regular fa-floppy-disk"></i>
        </button>

        <button>
          <i className="fa-solid fa-square-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectControls;
