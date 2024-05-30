const SERVER_URL = "http://127.0.0.1:3000";

export async function getProject(projectId) {
  return fetch(`${SERVER_URL}/project?project_id=${projectId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
      //   setCurrentProject(data.project[0]);
      //   setProjectPhotos(data.photos);
    })
    .catch((error) => {
      console.log("get_project error:", error);
      return error;
    });
}

export async function getProjects() {
  return fetch(`${SERVER_URL}/projects`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log("get_projects error:", error);
      return error;
    });
}

export async function createProject() {
  return fetch(`${SERVER_URL}/create_project`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   getFolders();
      //   getProjects();
      return data;
    })
    .catch((error) => {
      console.log("create_project error:", error);
      return error;
    });
}

export async function updateProject(project, photos) {
  const data = {
    project: project,
    photos: photos,
  };
  console.log("saving project", data);

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(`${SERVER_URL}/project`, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   getProjects();
      return data;
    })
    .catch((error) => {
      console.log("update_project error:", error);
    });
}

export async function deleteProject(projectId) {
  const options = {
    method: "DELETE",
  };

  return fetch(`${SERVER_URL}/project/${projectId}`, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   getFolders();
      //   getProjects();
      //   setCurrentProject({});
      return data;
    })
    .catch((error) => {
      console.log("delete_project error:", error);
      return error;
    });
}
