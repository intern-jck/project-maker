import { useState, useEffect } from 'react';
import axios from 'axios';
import { TextInput, TextArea, FolderSelect, DateInput, PhotoInput, TechInput, RepoInput } from '@/common/components/Inputs';
import { MdSave, MdDelete, MdClose } from 'react-icons/md';

import type { ProjectType, FolderType, DateType, PhotoType, TechType, RepoType } from '@/common/types';
import { defaultProject, defaultTech, defaultPhoto, defaultRepo } from '@/common/defaults' ;

import styles from './ProjectForm.module.scss';

const GITHUB_TECH_TAGS_JSON_URL = process.env.GITHUB_TECH_TAGS_JSON_URL;

type Props = {
  folders: FolderType[],
  project: ProjectType,
  saveProject: Function,
  deleteProject: Function,
  closeProject: Function,
};

export default function ProjectForm({
  folders,
  project,
  saveProject,
  deleteProject,
  closeProject
}: Props) {

  console.log("project form", project);

  const [formData, setFormData] = useState<ProjectType>(project ? project : defaultProject);
  const [newPhoto, setNewPhoto] = useState<PhotoType>(defaultPhoto);
  const [newTech, setNewTech] = useState<TechType>(defaultTech);
  const [newRepo, setNewRepo] = useState<RepoType>(defaultRepo);

  // useEffect(() => {
  //   if (project) {
  //     setFormData(project);
  //   }
  // }, [project]);

  // Project Methods

  function saveProjectHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveProject(formData);
    console.log(formData)
  };

  function deleteProjectHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    deleteProject(formData ? formData._id : '');
  };

  function closeProjectHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    closeProject();
  };

  // Input Methods

  // Text Input
  function updateTextInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const { name, value } = event.currentTarget;
    console.log(name, value)

    let updatedInput = {};

    if (name === 'name') {
      updatedInput = { 
        [name]: value,
        slug: value.toLowerCase().split(' ').join('-')
      };
    } else {
      updatedInput = { [name]: value };
    }

    setFormData((formData) => ({
      ...formData,
      ...updatedInput
    }) as ProjectType);

  };

  // Select Folder Input
  function updateFolder(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    const { value } = event.currentTarget;

    let updatedFolderId = { folder_id: '' };
    let updatedFolderName = { folder_name: '' };

    for (let i in folders) {
      if (folders[i]._id === value) {
        updatedFolderId.folder_id = value;
        updatedFolderName.folder_name = folders[i].name;
      }
    }

    setFormData((formData) => ({
      ...formData,
      ...updatedFolderId,
      ...updatedFolderName,
    }) as ProjectType);

  };

  // Date Input
  function updateDate(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const currentDate = formData ? formData.date : undefined;

    if (currentDate) {
      currentDate[name as keyof DateType] = value;
    }

    setFormData((formData) => ({
      ...formData,
      ...currentDate,
    }) as ProjectType);
  };

  // Photo Input
  function updatePhoto(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { value } = event.currentTarget;
    setNewPhoto({
      slug: `${formData.slug}-photo-${formData.photos.length + 1}`,
      url: value,
    });
  };

  function addPhoto(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const _photos = formData ? formData.photos : undefined;

    if (newPhoto && _photos) {

      _photos.push(newPhoto);

      setNewPhoto({
        slug: '',
        url: '',
      });

      setFormData((formData) => ({
        ...formData,
        photos: _photos,
      }) as ProjectType);

    }

  };

  function deletePhoto(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const index = event.currentTarget.getAttribute('data-photo-index');
    const photos = formData ? formData.photos : undefined;

    if (index) {

      if (photos) {
        photos.splice(parseInt(index), 1);
      }

      setFormData((formData) => ({
        ...formData,
        photos: photos,
      }) as ProjectType)
    }
  };

  // Tech Tag Input
  function updateTech(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const { name, value } = event.currentTarget;
    const _tech = newTech;

    _tech.name = value;
    _tech.key = value.toLowerCase().split(' ').join('-');

    setNewTech((_tech) => ({
      ..._tech
    }));

  };

  // TODO: Move this into common/hooks folder.
  async function getTechTags() {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/intern-jck/jsons/main/makerinchief/techTags.json');
      const data = await response.data;
      return data;
    } catch(error) {
      console.error(error);
      return error;
    }
  };

  function addTech(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const _tech = formData ? formData.tech : undefined;

    if (newTech && _tech) {

      const _key = newTech.name.toLowerCase().split(' ').join('-');

      getTechTags()
        .then(data => {

          const _url = data[_key] ? data[_key].url : '';

          const _tag = {
            key: _key,
            name: newTech.name,
            url: _url,
          };

          _tech.push(_tag);

          setNewTech({
            key: '',
            name: '',
            url: '',
          });

          setFormData((formData) => ({
            ...formData,
            tech: _tech,
          }) as ProjectType);

        })
        .catch(error => console.error(error));

    }

  };

  function deleteTech(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const index = event.currentTarget.getAttribute('data-tech-index');
    const tech = formData ? formData.tech : undefined;

    if (index) {
      if (tech) {
        tech.splice(parseInt(index), 1);
      }
      setFormData((formData) => ({
        ...formData,
        tech: tech,
      }) as ProjectType)
    };

  };

  // Repo Input
  function updateRepo(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { name, value } = event.currentTarget;
    const _repo = newRepo;

    if (name === 'name') {
      _repo.name = value;
      _repo.key = value.toLowerCase().split(' ').join('-');
    } else if (name === 'url') {
      _repo.url = value;
    }

    setNewRepo((_repo) => ({
      ..._repo
    }));


  };

  function addRepo(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const _repos = formData ? formData.repos : undefined;

    if (newRepo && _repos) {

      _repos.push(newRepo);

      setNewRepo({
        key: '',
        name: '',
        url: '',
      });

      setFormData((formData) => ({
        ...formData,
        repos: _repos,
      }) as ProjectType)
    }
  };

  function deleteRepo(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const index = event.currentTarget.getAttribute('data-repo-index');
    const _repos = formData ? formData.repos : undefined;

    if (index) {
      if (_repos) {
        _repos.splice(parseInt(index), 1);
      }
      setFormData((formData) => ({
        ...formData,
        repos: _repos,
      }) as ProjectType)
    };
  };

  return (
    <>
      {
        formData ?
          <form className={styles.projectForm} onSubmit={saveProjectHandler}>

            <div className={styles.formMenu}>
              <h2 className={styles.formName}>NAME: <span>{formData.name}</span></h2>
              <h2 className={styles.formCollection}>FOLDER: <span>{formData.folder_name}</span></h2>

              <button type='submit'>
                <MdSave />
              </button>
              <button onClick={deleteProjectHandler}>
                <MdDelete />
              </button>
              <button onClick={closeProjectHandler}>
                <MdClose />
              </button>
            </div>

            <div className={styles.formInputs}>
              <TextInput
                className={styles.nameInput}
                inputName={'name'}
                value={formData.name}
                changeHandler={updateTextInput}
              />
              <FolderSelect
                className={styles.folderInput}
                inputName={'folder'}
                value={formData.folder_id}
                options={folders}
                changeHandler={updateFolder}
              />
              <TextInput
                className={styles.clientInput}
                inputName={'client'}
                value={formData.client}
                changeHandler={updateTextInput}
              />
              <TextInput
                className={styles.clientUrlInput}
                inputName={'client_url'}
                value={formData.client_url}
                changeHandler={updateTextInput}
              />
              <TextInput
                className={styles.urlInput}
                inputName={'url'}
                value={formData.url}
                changeHandler={updateTextInput}
              />
              <DateInput
                className={styles.dateInput}
                inputName={'date'}
                date={formData.date}
                changeHandler={updateDate}
              />
              <TextInput
                className={styles.shortInput}
                inputName={'short'}
                value={formData.short}
                changeHandler={updateTextInput}
              />
              <TextArea
                className={styles.infoInput}
                inputName={'info'}
                value={formData.info}
                changeHandler={updateTextInput}
              />
              <PhotoInput
                className={styles.photoInput}
                inputName={'photos'}
                value={newPhoto ? newPhoto.url : ''}
                photos={formData.photos}
                changeHandler={updatePhoto}
                addHandler={addPhoto}
                deleteHandler={deletePhoto}
              />
              <TechInput
                className={styles.techInput}
                tech={newTech}
                techList={formData.tech}
                changeHandler={updateTech}
                addHandler={addTech}
                deleteHandler={deleteTech}
              />
              <RepoInput
                // inputName={'repos'}
                // repoName={newRepo.name}
                // url={newRepo.url}
                className={styles.repoInput}
                repo={newRepo}
                repos={formData.repos}
                changeHandler={updateRepo}
                addHandler={addRepo}
                deleteHandler={deleteRepo}
              />
            </div>

          </form>
          : null
      }
    </>
  )
};
