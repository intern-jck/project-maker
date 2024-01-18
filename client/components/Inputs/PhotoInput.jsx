import React from 'react';

import TextInput from './TextInput.jsx';

export default function PhotoInput({ className, inputName, value, photos, changeHandler, addHandler, deleteHandler }) {
  return (
    <div className={className}>
      <div className="photoURL">
        <TextInput className={'photoURLInput'} inputName={inputName} value={value} changeHandler={changeHandler} />
        <button onClick={addHandler}>{/* <CgAddR /> */}</button>
      </div>

      <div className="photoList">
        {photos.map((photo, i) => {
          return (
            <div key={i} className="photoThumb">
              <Image src={photo.url} alt="not found" fill />
              <button onClick={deleteHandler} data-photo-index={i}>
                {/* <CgCloseR /> */}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
