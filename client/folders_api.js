const SERVER_URL = "http://127.0.0.1:3000";

export async function createFolder(value) {
  return fetch(`${SERVER_URL}/create_folder?folder_name=${value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function getFolders() {
  return fetch(`${SERVER_URL}/folders`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function getFolderProjects(value) {
  //   if (value === "ALL") {
  //     setCurrentFolder(DEFAULT_FOLDER);
  //   }

  return fetch(`${SERVER_URL}/folder_projects?folder_id=${value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function deleteFolder(value) {
  const options = {
    method: "DELETE",
  };

  return fetch(`${SERVER_URL}/folder/${value}`, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
}
