// import TextInput from "./Inputs/src/TextInput.jsx";
// import TextArea from "./Inputs/src/TextArea.jsx";
// import DateInput from "./Inputs/src/DateInput.jsx";

// import PhotoInput from "./Inputs/PhotoInput.jsx";
// import RepoInput from "./Inputs/RepoInput.jsx";
// import TagInput from "./Inputs/TagInput.jsx";

// import {
//     getProject,
//     createProject,
//     // saveProject,
//     // deleteProject,
//   } from "../api/projects.js";

// import { getPhotos, savePhotos, deletePhoto } from "../api/photos.js";

// const [photos, setPhotos] = useState(photosData);
// const [newPhoto, setNewPhoto] = useState({});

// const [repos, setRepos] = useState(reposData);
// const [newRepo, setNewRepo] = useState({});

// const [tags, setTags] = useState(tagsData);
// const [newTag, setNewTag] = useState({});

/**
 * 
 
  function saveProjectHandler(event) {
    event.preventDefault();
    // onSaveProject(project, photos);
  }

  function deleteProjectHandler(event) {
    event.preventDefault();
    const { value } = event.target;
    onDeleteProject(value);
  }

  // Functions to update form
  function updateTextInput(event) {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    let updatedInput = {};

    // If changing the name, maker sure to update the slug for correct routing
    if (name === "name") {
      updatedInput = {
        [name]: value,
        slug: value.toLowerCase().split(" ").join("-"),
      };
    }
    if (name.includes("-")) {
      updatedInput = {
        [name.replace("-", "_")]: value,
      };
    } else {
      updatedInput = { [name]: value };
    }

    // Update the current form data
    setProject((project) => ({
      ...project,
      ...updatedInput,
    }));
  }

  function updateDate(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setProject((project) => ({
      ...project,
      [name.replace("-", "_")]: value,
    }));
  }

  // Photos
  function updatePhoto(event) {
    event.preventDefault();
    const { name, value } = event.target;
    // console.log(name, value)
    const updatedPhoto = newPhoto;

    if (name === "photo-input-name") {
      updatedPhoto.name = value;
    } else if (name === "photo-input-url") {
      updatedPhoto.url = value;
    }

    updatedPhoto.photo_project_id = project.project_id;

    setNewPhoto(() => ({
      ...updatedPhoto,
    }));
  }

  function addPhoto(event) {
    event.preventDefault();
    console.log("add photo");

    let updatedPhotos = photos.slice();
    const updatedPhoto = newPhoto;
    updatedPhoto.created_on = Date.now();
    updatedPhotos.push(updatedPhoto);

    console.log("adding:\n", updatedPhoto);
    setPhotos(() => updatedPhotos);

    setNewPhoto({});

    console.log(photos);
  }

  function deletePhoto(event) {
    event.preventDefault();
    const index = event.target.getAttribute("data-photo-index");
    let updatedPhotos = photos.slice();
    updatedPhotos.splice(index, 1);
    setPhotos(() => updatedPhotos);
  }

  // Repos
  function updateRepo(event) {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedRepo = newRepo;

    if (name === "repo-input_name") {
      updatedRepo.name = value;
    } else if (name === "repo-input-url") {
      updatedRepo.url = value;
    }

    updatedRepo.repo_project_id = project.project_id;

    setNewRepo(() => ({
      ...updatedRepo,
    }));
  }

  function addRepo(event) {
    event.preventDefault();
    let updatedRepos = repos.slice();
    updatedRepos.push(newRepo);
    setRepos(() => updatedRepos);
  }

  function deleteRepo(event) {
    event.preventDefault();
    const index = event.target.getAttribute("data-repo-index");
    let updatedRepos = repos.slice();
    updatedRepos.splice(index, 1);
    setRepos(() => updatedRepos);
  }

  //Tags
  function updateTag(event) {
    event.preventDefault();
    const { name, value } = event.target;
    const updatedTag = newTag;

    if (name === "tag-input_name") {
      updatedTag.name = value;
    } else if (name === "tag-input-url") {
      updatedTag.url = value;
    }

    updatedTag.tag_project_id = project.project_id;

    setNewRepo(() => ({
      ...updatedTag,
    }));
  }

  function addTag(event) {
    event.preventDefault();
    let updatedTags = tags.slice();
    updatedTags.push(newTag);
    setTags(() => updatedTags);
  }

  function deleteTag(event) {
    event.preventDefault();
    const index = event.target.getAttribute("data-tag-index");
    let updatedTags = tags.slice();
    updatedTags.splice(index, 1);
    setTags(() => updatedTags);
  }
 */

// photoUrl={newPhoto.url}
// photos={photos}
// changeHandler={updatePhoto}
// addHandler={addPhoto}
// deleteHandler={deletePhoto}

// {/* <PhotoInput
// name="project-photos"
// id="photos-input"
// className="photos-input"
// photoName={newPhoto.name}
// photoUrl={newPhoto.url}
// photos={photos}
// changeHandler={updatePhoto}
// addHandler={addPhoto}
// deleteHandler={deletePhoto}
// />

// <RepoInput
// name="project-repos"
// id="repos-input"
// className="repos-input"
// repoName={newRepo.name}
// repoUrl={newRepo.url}
// repos={repos}
// changeHandler={updateRepo}
// addHandler={addRepo}
// deleteHandler={deleteRepo}
// />

// <TagInput
// name="project-tags"
// id="tags-input"
// className="tags-input"
// // tagName={newRepo.name}
// // repoUrl={newRepo.url}
// tags={tags}
// changeHandler={updateTag}
// addHandler={addTag}
// deleteHandler={deleteTag}
// /> */}

/**
 * 
        // <form
        //   id="project-form"
        //   className="project-form"
        //   onSubmit={saveProjectHandler}
        // >
 
        // </form>


          <div className="form-info">
            <span>project info</span>
            <TextInput
              name="name"
              value={project.name}
              changeHandler={updateTextInput}
            />
            <TextInput
              name="url"
              value={project.url}
              changeHandler={updateTextInput}
            />
            <TextInput
              name="client"
              value={project.client}
              changeHandler={updateTextInput}
            />
            <TextInput
              name="client-url"
              value={project.client_url}
              changeHandler={updateTextInput}
            />
            <DateInput
              name="start-date"
              value={project.start_date}
              changeHandler={updateDate}
            />
            <DateInput
              name="end-date"
              value={project.end_date}
              changeHandler={updateDate}
            />
            <TextInput
              name={"short"}
              value={project.short}
              changeHandler={updateTextInput}
            />
            <TextArea
              name={"description"}
              value={project.description}
              changeHandler={updateTextInput}
            />
          </div>

 */

/**
           * 
           * 
           * 
        



  // async function saveProjectHandler(project, photos, repos, tags) {
  //   console.log(project, photos);

  //   try {
  //     const projectResult = await saveProject(project);
  //     // const photosResult = await savePhotos(project.id, photos);
  //     // const reposResult = await saveRepos(repos);
  //     // const tagsResult = await saveTags(tags);

  //     console.log(
  //       `saveProject Results:
  //       result: ${projectResult.data}
  //       result: ${photosResult.data}
  //       `
  //     );

  //     const projects = await getProjects();
  //     setProjects(projects);

  //     const r = await getProject(project.id);
  //     const p = r.data[0];
  //     setCurrentProject(p);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function deleteProjectHandler(id) {
  //   try {
  //     const result = await deleteProject(id);
  //     const projects = await getProjects();
  //     setProjects(projects);
  //     setCurrentProject({});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }













// import { getPhotos, savePhotos, deletePhoto } from "./api/photos.js";
// import { getRepos, saveRepos, deleteRepo } from "./api/repos.js";
// import { getTags, saveTags, deleteTag } from "./api/tags.js";


  // const [projectPhotos, setProjectPhotos] = useState([]);
  // const [projectRepos, setProjectRepos] = useState([]);
  // const [projectTags, setProjectTags] = useState([]);


































          
           */
