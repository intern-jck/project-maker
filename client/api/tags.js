import axios from "axios";
const SERVER_URL = "http://127.0.0.1:3000";

export async function getTags(id) {
  return { getTags: id };
  // return fetch(`/photos/${projectId}`)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((error) => {
  //     console.log("getPhotos", error);
  //     return error;
  //   });

  const url = `${SERVER_URL}/photos`;

  //   try {
  //     const result = await axios.get(url);
  //     const data = result.data;
  //     return data.data;
  //   } catch (error) {
  //     return error;
  //   }
}

export async function saveTags(tags) {
  return { saveTags: tags };
  // const data = {
  //   projectId: projectId,
  //   photo: photo,
  // };

  // const options = {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // };

  // return fetch(`/photos/${projectId}`, options)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch();

  //   const url = `${SERVER_URL}/photos/`;

  //   const body = {
  //     photos: photos,
  //   };

  //   try {
  //     const result = await axios.put(url, body);
  //     return result.data;
  //   } catch (error) {
  //     return error;
  //   }
}

export async function deleteTag(id) {
  return { deleteTag: id };
}
