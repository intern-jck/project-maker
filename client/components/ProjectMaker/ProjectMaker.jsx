import React, { useEffect, useState } from 'react';
import './ProjectMaker.scss';

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

  function saveProjectHandler(event) {
    event.preventDefault();
    onSaveProject(currentFormData);
  }

  function deleteProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    onDeleteProject(value);
  }

  function closeProjectHandler() {
    console.log('Close Project');
    onCloseProject();
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

  function updateDate(event) {
    console.log(event.target.value);
    const { name, value } = event.target;

    setCurrentFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  }

  return (
    <div className='ProjectMaker'>
      <div className='form-header'>
        <p>
          <span>ID:</span> {projectData.project_id}
        </p>
        <div className='form-controls'>
          <button type='submit' form='project-form'>
            <i className='fa-regular fa-floppy-disk'></i>
          </button>
          <button
            value={currentFormData.project_id}
            onClick={deleteProjectHandler}
          >
            <i className='fa-regular fa-trash-can'></i>
          </button>
          <button onClick={closeProjectHandler}>
            <i className='fa-solid fa-square-xmark'></i>
          </button>
        </div>
      </div>

      <form
        id='project-form'
        className='project-form'
        onSubmit={saveProjectHandler}
      >
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
          <TextInput
            inputId='client-input'
            className='client-input'
            inputName={'client'}
            value={projectData.client}
            changeHandler={updateTextInput}
          />
          <TextInput
            inputId='client-url-input'
            className='client-url-input'
            inputName={'client_url'}
            value={projectData.client_url}
            changeHandler={updateTextInput}
          />
          <DateInput
            inputId='date-input'
            className='date-input'
            inputName={'start_date'}
            value={projectData.start_date}
            changeHandler={updateDate}
          />
        </div>
        <div className='form-second-row'>
          <TextInput
            inputId='short-input'
            className='short-input'
            inputName={'short'}
            value={projectData.short}
            changeHandler={updateTextInput}
          />
          <TextArea
            className='info-input'
            inputName={'info'}
            value={projectData.info}
            changeHandler={updateTextInput}
          />
        </div>
      </form>
    </div>
  );
};

export default ProjectMaker;
