const SERVER_URL = 'http://127.0.0.1:3000';

// // Folder Functions
// export function getFolders() {
//   fetch(`${SERVER_URL}/folders`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       // setFolders(data.data);
//       // callback(data.data);
//       return data.data;
//     })
//     .catch();
// }

// TODO:
//    - Refactor all to use async/await

export async function getFolders() {
  try {
    const response = await fetch(`${SERVER_URL}/folders`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCreateFolder(value) {
  // fetch(`${SERVER_URL}/create_folder?folder_name=${value}`)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     getFolders();
  //     getProjects();
  //   })
  //   .catch();
  try {
    const response = await fetch(
      `${SERVER_URL}/create_folder?folder_name=${value}`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function deleteFolder(value, callback) {
  const options = {
    method: 'DELETE',
  };

  fetch(`${SERVER_URL}/folder/${value}`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getFolders();
      getProjects();
    })
    .catch();
}

// Project Functions
export function getCreateProject(callback) {
  fetch(`${SERVER_URL}/create_project`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getFolders();
      getProjects();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getProjects(callback) {
  fetch(`${SERVER_URL}/projects`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // setProjects(data.data);
      callback(data.data);
      // Use for testing
      // callback(data.data.length ? data.data[0] : {});
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getProject(projectId, callback) {
  fetch(`${SERVER_URL}/project?project_id=${projectId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function putProject(data) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
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

export function deleteProject(projectId, callback) {
  const options = {
    method: 'DELETE',
  };

  fetch(`${SERVER_URL}/project/${projectId}`, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getFolders();
      getProjects();
      callback({});
    })
    .catch((error) => {
      console.log(error);
    });
}
