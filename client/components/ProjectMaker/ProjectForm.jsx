import React, { useEffect, useState } from 'react';

import TextInput from '../common/Inputs/TextInput.jsx';
import TextArea from '../common/Inputs/TextArea.jsx';
import DateInput from '../common/Inputs/DateInput.jsx';

const ProjectForm = ({ formData, onSaveClick, onDeleteClick }) => {
  const [currentFormData, setCurrentFormData] = useState(formData);

  useEffect(() => {
    setCurrentFormData(formData);
  }, [formData]);

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
    <div className='ProjectForm'>
      <form onSubmit={onSaveClickHandler}>
        <div className='project-controls'>
          <button type='submit'>
            <i className='fa-regular fa-floppy-disk'></i>
          </button>
          <button
            value={currentFormData.project_id}
            onClick={onDeleteClickHandler}
          >
            <i className='fa-regular fa-trash-can'></i>
          </button>
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
            value={formData.url}
            changeHandler={updateTextInput}
          />
          {/* <TextInput
            className="client-input"
            inputName={'client'}
            value={formData.client}
            changeHandler={updateTextInput}
          /> */}
          {/* <TextInput
            className="client-url-input"
            inputName={'client_url'}
            value={formData.client_url}
            changeHandler={updateTextInput}
          /> */}
          {/* <DateInput className="date-input" inputName={'date'} date={formData.date} changeHandler={updateDate} /> */}
        </div>
        {/* <div className="form-second-row">
          <TextInput
            className="short-input"
            inputName={'short'}
            value={formData.short}
            changeHandler={updateTextInput}
          />
          <TextArea className="info-input" inputName={'info'} value={formData.info} changeHandler={updateTextInput} />
        </div> */}
      </form>
    </div>
  );
};

export default ProjectForm;
