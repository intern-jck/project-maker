const SERVER_URL = "http://127.0.0.1:3000";

/**
 * PHOTO REQUESTS
 */
function getPhotos(projectId) {
  fetch(`/photos/${projectId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("getPhotos", error);
    });
}
