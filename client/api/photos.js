import axios from "axios";
const SERVER_URL = "http://127.0.0.1:3000";

export async function getPhotos(id) {
  const url = `${SERVER_URL}/photos/${id}`;

  try {
    const result = await axios.get(url);
    const data = result.data;
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function savePhotos(photos) {
  const url = `${SERVER_URL}/photos`;

  const body = {
    photos: photos,
  };

  try {
    const result = await axios.put(url, body);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function deletePhoto(id) {
  return { deletePhot: id };
}
