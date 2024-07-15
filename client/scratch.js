
  // App Functions
  // function closeProject() {
  //   setCurrentProject({});
  // }

  // // function onSelectProjectHandler(event) {
  // //   event.preventDefault();
  // //   const { value } = event.target;
  // //   // onSelectProject(value);
  // //   console.log(value);
  // //   getProject(value)
  // //     .then((data) => {
  // //       console.log(data);
  // //       setCurrentProject(data.project);
  // //       setCurrentPhotos(data.photos);
  // //     })
  // //     .catch((error) => {
  // //       console.log(error);
  // //     });
  // // }

  // function saveProject(project, photos) {
  //   console.log("saving: ", project, photos)
  //   updateProject(project, photos);
  // }

  // async function actionHandler(event) {
  //   event.preventDefault();
  //   const { value, name } = event.target;
  //   // console.log(value, name);
  //   let data;

  //   switch (name) {
  //     // Projects API
  //     case "close_project":
  //       console.log("closing project")
  //       closeProject();  
  //       break;
  //     case "create_project":
  //       data = await createProject();
  //       console.log(data);
  //       break;
  //     case "get_project":
  //       console.log("getting project: ", value);
  //       data = await getProject(value);
  //       // console.log(data);
  //       setCurrentProject(data.project);
  //       setProjectPhotos(data.photos);
  //       break;
  //     case "get_projects":
  //       data = await getProjects();
  //       console.log(data);
  //       break;
  //     case "update_project":
  //       data = await updateProject();
  //       console.log(data);
  //       break;
  //     case "delete_project":
  //       data = await deleteProject();
  //       console.log(data);
  //       break;
  //     // Folders API
  //     case "get_folders":
  //       data = await getFolders();
        
  //       console.log(data);
  //       break;
  //     case "create_folder":
  //       data = await createFolder();
  //       console.log(data);
  //       break;
  //     case "delete_folder":
  //       data = await deleteFolder();
  //       console.log(data);
  //       break;
  //     default:
  //       break;
  //   }
  // }
