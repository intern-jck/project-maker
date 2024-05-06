import React from 'react';

import TextInput from './TextInput.jsx';

export default function TechInput({ className, tech, url, techList, changeHandler, addHandler, deleteHandler }) {
  return (
    <div className={className}>
      <div className="techName">
        <TextInput className={'techNameInput'} inputName={'tech'} value={tech.name} changeHandler={changeHandler} />

        <button onClick={addHandler}>X</button>
      </div>

      <div className="techList">
        {techList ? (
          techList.map((tech, i) => {
            return (
              <div key={i} className="tech" data-tag-index={i}>
                {tech.name}
                <button onClick={deleteHandler} data-tech-index={i}></button>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
