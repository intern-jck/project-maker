import React, { useEffect, useState } from 'react';
import './ProjectMaker.scss';

// import ProjectForm from './ProjectForm.jsx';

import TextInput from '../common/Inputs/TextInput.jsx';
import TextArea from '../common/Inputs/TextArea.jsx';
import DateInput from '../common/Inputs/DateInput.jsx';

const ProjectMaker = ({
  projectData,
  onCloseProject,
  onSaveProject,
  onDeleteProject,
}) => {
  const [currentFormData, setCurrentFormData] = useState(projectData);

  function saveProjectHandler(data) {
    console.log('Save Project');
    onSaveProject(data);
  }

  function onSaveClickHandler(event) {
    event.preventDefault();
    console.log(currentFormData);
    onSaveClick(currentFormData);
  }
  function onDeleteClickHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    onDeleteClick(value);
  }

  function deleteProjectHandler() {
    console.log('Delete Project');
  }

  function closeProjectHandler() {
    console.log('Close Project');
    onCloseProject();
  }

  function deleteProjectHandler(value) {
    console.log('Delete Project');
    onDeleteProject(value);
  }

  function updateTextInput(event) {
    event.preventDefault();

    const { name, value } = event.currentTarget;
    console.log(name, value);

    let updatedInput = {};

    // If changing the name, maker sure to update the slug for correct routing
    if (name === 'name') {
      updatedInput = {
        [name]: value,
        slug: value.toLowerCase().split(' ').join('-'),
      };
    } else {
      updatedInput = { [name]: value };
    }

    // Update the current form data
    setCurrentFormData((currentFormData) => ({
      ...currentFormData,
      ...updatedInput,
    }));
  }
  return (
    <div className='ProjectMaker'>
      {/* <div className='controls'>
        <div className='control-header'>
          <h4>
            <span>NAME:</span> {projectData.name}
          </h4>
          <h4>
            <span>ID:</span> {projectData.project_id}
          </h4>
        </div>
        <div className='control-buttons'>
          <button onClick={closeProjectHandler}>
            <i className='fa-solid fa-square-xmark'></i>
          </button>
        </div>
      </div> */}

      {/* <ProjectForm
        projectData={projectData}
        onSaveClick={saveProjectHandler}
        onDeleteClick={deleteProjectHandler}
      /> */}

      <div className='ProjectForm'>
        <form onSubmit={onSaveClickHandler}>
          <div className='form-header'>
            <p>
              <span>ID:</span> {projectData.project_id}
            </p>
            <div className='form-controls'>
              <button type='submit'>
                <i className='fa-regular fa-floppy-disk'></i>
              </button>
              <button
                value={currentFormData.project_id}
                onClick={onDeleteClickHandler}
              >
                <i className='fa-regular fa-trash-can'></i>
              </button>
              <button onClick={closeProjectHandler}>
                <i className='fa-solid fa-square-xmark'></i>
              </button>
            </div>
          </div>

          <div className='form-first-row'>
            <TextInput
              inputId='name-input'
              className='name-input'
              inputName={'name'}
              value={currentFormData.name}
              changeHandler={updateTextInput}
            />
            <TextInput
              inputId='url-input'
              className='url-input'
              inputName={'url'}
              value={projectData.url}
              changeHandler={updateTextInput}
            />
            {/* <TextInput
            className="client-input"
            inputName={'client'}
            value={projectData.client}
            changeHandler={updateTextInput}
          /> */}
            {/* <TextInput
            className="client-url-input"
            inputName={'client_url'}
            value={projectData.client_url}
            changeHandler={updateTextInput}
          /> */}
            {/* <DateInput className="date-input" inputName={'date'} date={projectData.date} changeHandler={updateDate} /> */}
          </div>
          {/* <div className="form-second-row">
          <TextInput
            className="short-input"
            inputName={'short'}
            value={projectData.short}
            changeHandler={updateTextInput}
          />
          <TextArea className="info-input" inputName={'info'} value={projectData.info} changeHandler={updateTextInput} />
        </div> */}
        </form>
      </div>
    </div>
  );
};

export default ProjectMaker;
