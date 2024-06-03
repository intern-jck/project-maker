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
