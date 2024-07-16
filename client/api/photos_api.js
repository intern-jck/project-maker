import axios from "axios";
const SERVER_URL = "http://127.0.0.1:3000";

/**
 * PHOTO REQUESTS
 */
export async function getPhotos(projectId) {
  return fetch(`/photos/${projectId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("getPhotos", error);
      return error;
    });
}

export async function savePhotos(projectId, photo) {
  const data = {
    projectId: projectId,
    photo: photo,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(`/photos/${projectId}`, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch();
}
