import React from 'react';

import TextInput from './TextInput.jsx';

export default function PhotoInput({
  // inputId,
  className,
  // inputName,
  valueName,
  valueUrl,
  changeHandler,
  addHandler,

  // photos,
  // deleteHandler,
}) {
  return (
    <div className={className}>
      <div className='photo-info'>
        <TextInput
          inputId='photo-input-name'
          className='photo-input-name'
          inputName='photo-input-name'
          value={valueName}
          changeHandler={changeHandler}
        />
        <TextInput
          inputId='photo-input-url'
          className='photo-input-url'
          inputName='photo-input-url'
          value={valueUrl}
          changeHandler={changeHandler}
        />
        <button onClick={addHandler}>
          <i className='fa-solid fa-square-plus'></i>
        </button>
      </div>

      <div className='photoList'>
        {/* {photos.map((photo, i) => {
          return (
            <div key={i} className='photoThumb'>
              <Image src={photo.url} alt='not found' fill />
              <button onClick={deleteHandler} data-photo-index={i}>
                <i class='fa-regular fa-circle-xmark'></i>
              </button>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
