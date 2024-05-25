function getProjects() {
  fetch(`${SERVER_URL}/projects`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setProjects(data.data);
      // Use for testing
      // setCurrentProject(data.data.length ? data.data[0] : {});
    })
    .catch((error) => {
      console.log(error);
    });
}

function getProject(projectId) {
  fetch(`${SERVER_URL}/project?project_id=${projectId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCurrentProject(data.project[0]);
      setProjectPhotos(data.photos);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getFolderProjects(value) {
  console.log("getting projects in", value);
  if (value === "ALL") {
    setCurrentFolder(DEFAULT_FOLDER);
  }

  fetch(`${SERVER_URL}/folder_projects?folder_id=${value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setProjects(data.data);
      // Use for testing
      setCurrentProject(data.data.length ? data.data[0] : {});
    })
    .catch((error) => {
      console.log(error);
    });
}

function putProject(data) {
  console.log(data);

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(`${SERVER_URL}/project`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getProjects();
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteProject(projectId) {
  console.log(`client deleting: ${projectId}`);
  const options = {
    method: "DELETE",
  };

  fetch(`${SERVER_URL}/project/${projectId}`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      getFolders();
      getProjects();
      setCurrentProject({});
    })
    .catch((error) => {
      console.log(error);
    });
}

export default projectHelpers = {
  getProjects,
  getProject,
  getFolderProjects,
  putProject,
  deleteProject,
};
