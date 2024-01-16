import React, { useEffect, useState } from 'react';

import TextInput from '../common/Inputs/TextInput.jsx';
import TextArea from '../common/Inputs/TextArea.jsx';
import DateInput from '../common/Inputs/DateInput.jsx';

// import FolderSelect from '../common/Inputs/FolderSelect.jsx';
// import PhotoInput from '../common/Inputs/PhotoInput.jsx';
// import TechInput from '../common/Inputs/TechInput.jsx';
// import RepoInput from '../common/Inputs/RepoInput.jsx';

const defaultProject = {
  name: 'Cyber Truck',
  url: '',
  date: {
    start_month: 'AUG',
    start_year: '2020',
    end_month: '',
    end_year: '',
  },
  short: 'Trying to give my truck a brain',
  info: 'I stumbled across an open source package called Crankshaft which can link an Android and Raspberry Pi together to allow you setup your own navigation system.  I 3D printer a housing and replaced the radio console (which was dead at this point) in hopes of making my own.  Wiring was a pain and I messed up a few details like screen orientation, but learned a lot!  While it was cool while I had it, I ended up taking out due to not being able to createa safe shutdown for the Pi and the fact a slight bump in the road would disconnet the power harness, resetting the whole thing.  Oh well.  Still learnt a lot!',
  tech: [
    ['Raspberry Pi', 'https://www.raspberrypi.org/'],
    ['Crankshaft', '#'],
    ['Fusion 360', '#'],
  ],
  photos: [
    'https://iili.io/DPMBJS.jpg',
    'https://iili.io/DPMfg2.jpg',
    'https://iili.io/DPMFf4.jpg',
    'https://iili.io/DPM2sf.jpg',
    'https://iili.io/DPGmJI.jpg',
    'https://iili.io/DPGtlp.jpg',
    'https://iili.io/DPGZfR.jpg',
    'https://iili.io/DPGLiv.jpg',
    'https://iili.io/DPGOVj.jpg',
    'https://iili.io/DPGjDu.jpg',
    'https://iili.io/DPGhNe.jpg',
    'https://iili.io/DPGXR9.jpg',
    'https://iili.io/DPGMSS.jpg',
  ],
  resources: [],
};

const ProjectForm = ({ formData, onSaveClick, onDeleteClick }) => {
  const [currentFormData, setCurrentFormData] = useState(formData);

  useEffect(() => {
    setCurrentFormData(formData);
  }, [formData]);

  // const [formData, setFormData] = useState();
  // const [newPhoto, setNewPhoto] = useState('');
  // const [newTech, setNewTech] = useState('');
  // const [newRepo, setNewRepo] = useState('');

  // useEffect(() => {
  //   setFormData(project);
  // }, [project]);

  // function test() {
  //   console.log('submit test');
  // }

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

  // function deleteProjectHandler(event) {
  //   event.preventDefault();
  //   deleteProject(formData ? formData._id : '');
  // }

  // function closeProjectHandler(event) {
  //   event.preventDefault();
  //   closeProject();
  // }

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

  // function updateDate() {
  //   console.log('function test');
  // }
  // function updatePhoto() {
  //   console.log('function test');
  // }
  // function addPhoto() {
  //   console.log('function test');
  // }
  // function deletePhoto() {
  //   console.log('function test');
  // }
  // function updateTech() {
  //   console.log('function test');
  // }
  // function addTech() {
  //   console.log('function test');
  // }
  // function deleteTech() {
  //   console.log('function test');
  // }
  // function updateRepo() {
  //   console.log('function test');
  // }
  // function addRepo() {
  //   console.log('function test');
  // }
  // function deleteRepo() {
  //   console.log('function test');
  // }

  return (
    <div className='ProjectForm'>
      <form onSubmit={onSaveClickHandler}>
        <div>
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
            className='name-input'
            inputName={'name'}
            value={currentFormData.name}
            changeHandler={updateTextInput}
          />
          <TextInput
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

//   // Project Methods

//   // Input Methods

//   // Text Input
//   // Select Folder Input
//   function updateFolder(event: React.ChangeEvent<HTMLSelectElement>) {
//     event.preventDefault();
//     const { value } = event.currentTarget;

//     let updatedFolderId = { folder_id: '' };
//     let updatedFolderName = { folder_name: '' };

//     for (let i in folders) {
//       if (folders[i]._id === value) {
//         updatedFolderId.folder_id = value;
//         updatedFolderName.folder_name = folders[i].name;
//       }
//     }

//     setFormData((formData) => ({
//       ...formData,
//       ...updatedFolderId,
//       ...updatedFolderName,
//     }) as ProjectType);

//   };

//   // Date Input
//   function updateDate(event: React.ChangeEvent<HTMLSelectElement>) {
//     event.preventDefault();
//     const { name, value } = event.currentTarget;
//     const currentDate = formData ? formData.date : undefined;

//     if (currentDate) {
//       currentDate[name as keyof DateType] = value;
//     }

//     setFormData((formData) => ({
//       ...formData,
//       ...currentDate,
//     }) as ProjectType);
//   };

//   // Photo Input
//   function updatePhoto(event: React.ChangeEvent<HTMLInputElement>) {
//     event.preventDefault();
//     const { value } = event.currentTarget;
//     setNewPhoto({
//       slug: `${formData.slug}-photo-${formData.photos.length + 1}`,
//       url: value,
//     });
//   };

//   function addPhoto(event: React.MouseEvent<HTMLButtonElement>) {
//     event.preventDefault();

//     const _photos = formData ? formData.photos : undefined;

//     if (newPhoto && _photos) {

//       _photos.push(newPhoto);

//       setNewPhoto({
//         slug: '',
//         url: '',
//       });

//       setFormData((formData) => ({
//         ...formData,
//         photos: _photos,
//       }) as ProjectType);

//     }

//   };

//   function deletePhoto(event: React.MouseEvent<HTMLButtonElement>) {
//     event.preventDefault();
//     const index = event.currentTarget.getAttribute('data-photo-index');
//     const photos = formData ? formData.photos : undefined;

//     if (index) {

//       if (photos) {
//         photos.splice(parseInt(index), 1);
//       }

//       setFormData((formData) => ({
//         ...formData,
//         photos: photos,
//       }) as ProjectType)
//     }
//   };

//   // Tech Tag Input
//   function updateTech(event: React.ChangeEvent<HTMLInputElement>) {
//     event.preventDefault();

//     const { name, value } = event.currentTarget;
//     const _tech = newTech;

//     _tech.name = value;
//     _tech.key = value.toLowerCase().split(' ').join('-');

//     setNewTech((_tech) => ({
//       ..._tech
//     }));

//   };

//   // TODO: Move this into common/hooks folder.
//   async function getTechTags() {
//     try {
//       const response = await axios.get('https://raw.githubusercontent.com/intern-jck/jsons/main/makerinchief/techTags.json');
//       const data = await response.data;
//       return data;
//     } catch(error) {
//       console.error(error);
//       return error;
//     }
//   };

//   function addTech(event: React.MouseEvent<HTMLButtonElement>) {
//     event.preventDefault();

//     const _tech = formData ? formData.tech : undefined;

//     if (newTech && _tech) {

//       const _key = newTech.name.toLowerCase().split(' ').join('-');

//       getTechTags()
//         .then(data => {

//           const _url = data[_key] ? data[_key].url : '';

//           const _tag = {
//             key: _key,
//             name: newTech.name,
//             url: _url,
//           };

//           _tech.push(_tag);

//           setNewTech({
//             key: '',
//             name: '',
//             url: '',
//           });

//           setFormData((formData) => ({
//             ...formData,
//             tech: _tech,
//           }) as ProjectType);

//         })
//         .catch(error => console.error(error));

//     }

//   };

//   function deleteTech(event: React.MouseEvent<HTMLButtonElement>) {
//     event.preventDefault();

//     const index = event.currentTarget.getAttribute('data-tech-index');
//     const tech = formData ? formData.tech : undefined;

//     if (index) {
//       if (tech) {
//         tech.splice(parseInt(index), 1);
//       }
//       setFormData((formData) => ({
//         ...formData,
//         tech: tech,
//       }) as ProjectType)
//     };

//   };

//   // Repo Input
//   function updateRepo(event: React.ChangeEvent<HTMLInputElement>) {
//     event.preventDefault();
//     const { name, value } = event.currentTarget;
//     const _repo = newRepo;

//     if (name === 'name') {
//       _repo.name = value;
//       _repo.key = value.toLowerCase().split(' ').join('-');
//     } else if (name === 'url') {
//       _repo.url = value;
//     }

//     setNewRepo((_repo) => ({
//       ..._repo
//     }));

//   };

//   function addRepo(event: React.MouseEvent<HTMLButtonElement>) {
//     event.preventDefault();

//     const _repos = formData ? formData.repos : undefined;

//     if (newRepo && _repos) {

//       _repos.push(newRepo);

//       setNewRepo({
//         key: '',
//         name: '',
//         url: '',
//       });

//       setFormData((formData) => ({
//         ...formData,
//         repos: _repos,
//       }) as ProjectType)
//     }
//   };

//   function deleteRepo(event: React.MouseEvent<HTMLButtonElement>) {
//     event.preventDefault();
//     const index = event.currentTarget.getAttribute('data-repo-index');
//     const _repos = formData ? formData.repos : undefined;

//     if (index) {
//       if (_repos) {
//         _repos.splice(parseInt(index), 1);
//       }
//       setFormData((formData) => ({
//         ...formData,
//         repos: _repos,
//       }) as ProjectType)
//     };
//   };

//
// };
