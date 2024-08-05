import React, { useState, useEffect } from "react";

import {
  saveProject,
  // deleteProject,
} from "../api/projects.js";

import TextInput from "./Inputs/src/TextInput.jsx";
import TextArea from "./Inputs/src/TextArea.jsx";
import DateInput from "./Inputs/src/DateInput.jsx";

export default function InfoForm({
  name,
  id,
  className,
  infoData,
  // addHandler,
  changeHandler,
  deleteHandler,
}) {
  const [info, setInfo] = useState(infoData ? infoData : {});

  useEffect(() => {
    setInfo(infoData);
  }, [infoData]);

  async function saveProjectHandler(project) {
    try {
      const result = await saveProject(project);
      console.log(`result: ${result.data}`);
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
    <form
      id={id ? `${id}-form` : "info-form"}
      onSubmit={saveProjectHandler}
    >
      <div id={id} className={className ? className : "form-input"}>
        <div className="form-info-header">
          <span>{name.replace("-", " ")}</span>

          <button name="save-project" type="submit" form="project-form">
            <i className="fa-solid fa-floppy-disk"></i>
          </button>
        </div>

        <div className={`${className}-inputs`}>
          <div className={`${className}-name`}>
            <TextInput
              name="name"
              value={infoData.name}
              changeHandler={updateTextInput}
            />
            <TextInput
              name="url"
              value={infoData.url}
              changeHandler={updateTextInput}
            />
          </div>

          <div className={`${className}-client`}>
            <TextInput
              name="client"
              value={infoData.client}
              changeHandler={updateTextInput}
            />
            <TextInput
              name="client-url"
              value={infoData.client_url}
              changeHandler={updateTextInput}
            />
          </div>

          <div className={`${className}-date`}>
            <DateInput
              name="start-date"
              value={infoData.start_date}
              changeHandler={updateDate}
            />
            <DateInput
              name="end-date"
              value={infoData.end_date}
              changeHandler={updateDate}
            />
          </div>

          <div className={`${className}-description`}>
            <TextInput
              name={"short"}
              value={infoData.short}
              changeHandler={updateTextInput}
            />
            <TextArea
              name={"description"}
              value={infoData.description}
              changeHandler={updateTextInput}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
