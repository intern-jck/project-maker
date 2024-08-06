import React, { useState, useEffect } from "react";

import { saveProject } from "../../api/projects.js";

import TextInput from "../Inputs/TextInput.jsx";
import TextArea from "../Inputs/TextArea.jsx";
import DateInput from "../Inputs/DateInput.jsx";

import "./InfoForm.scss";

export default function InfoForm({
  name,
  id,
  className,
  infoData,
  submitForm,
}) {
  const [info, setInfo] = useState(infoData ? infoData : {});

  useEffect(() => {
    setInfo(infoData);
  }, [infoData]);

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const result = await saveProject(info);
      console.log(`result: ${result.data}`);
      submitForm();
    } catch (error) {
      console.log(error);
    }
  }

  function updateTextInput(event) {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    let updatedInfo = {};

    // If changing the name, maker sure to update the slug for correct routing
    if (name === "name") {
      updatedInfo = {
        [name]: value,
        slug: value.toLowerCase().split(" ").join("-"),
      };
    }
    if (name.includes("-")) {
      updatedInfo = {
        [name.replace("-", "_")]: value,
      };
    } else {
      updatedInfo = { [name]: value };
    }

    // Update the current form data
    setInfo((info) => ({
      ...info,
      ...updatedInfo,
    }));
  }

  function updateDate(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setInfo((info) => ({
      ...info,
      [name.replace("-", "_")]: value,
    }));
  }

  return (
    <form id={id ? `${id}-form` : "info-form"} onSubmit={submitHandler}>
      <div className="info-form-header">
        <span>{name.replace("-", " ")}</span>

        <button
          name="save-project"
          type="submit"
          form={id ? `${id}-form` : "info-form"}
        >
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </div>

      <div className="info-form-inputs">
        <div className="info-form-name">
          <TextInput
            name="name"
            value={info.name}
            changeHandler={updateTextInput}
          />
          <TextInput
            name="url"
            value={info.url}
            changeHandler={updateTextInput}
          />
        </div>

        <div className="info-form-client">
          <TextInput
            name="client"
            value={info.client}
            changeHandler={updateTextInput}
          />
          <TextInput
            name="client-url"
            value={info.client_url}
            changeHandler={updateTextInput}
          />
        </div>

        <div className="info-form-date">
          <DateInput
            name="start-date"
            value={info.start_date}
            changeHandler={updateDate}
          />
          <DateInput
            name="end-date"
            value={info.end_date}
            changeHandler={updateDate}
          />
        </div>

        <div className="info-form-description">
          <TextInput
            name={"short"}
            value={info.short}
            changeHandler={updateTextInput}
          />
          <TextArea
            name={"description"}
            value={info.description}
            changeHandler={updateTextInput}
          />
        </div>
      </div>
    </form>
  );
}
