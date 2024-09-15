import axios from "axios";
// const SERVER_URL = "http://127.0.0.1:3000";

import config from './serverconfig.js'
const SERVER_URL = config.SERVER_URL;

export async function getPhotos(id) {
  const url = `${SERVER_URL}/photos/${id ? id : ""}`;
  console.log('photos api: ', url)
  try {
    const result = await axios.get(url);
    const data = result.data;
    return data.project;
  } catch (error) {
    return error;
  }
}

export async function savePhoto(photo) {
  const url = `${SERVER_URL}/photos/`;

  try {
    const result = await axios.post(url, photo);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function updatePhoto(id, photo) {
  const url = `${SERVER_URL}/photos/${id}`;

  try {
    const result = await axios.put(url, photo);
    const data = result.data;
    return data.project;
  } catch (error) {
    return error;
  }
}

// export async function deletePhoto(id) {
//   return { deletePhoto: id };
// }
