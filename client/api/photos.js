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

export async function savePhotos(id, photos) {
  console.log("savePhotos", id, photos)

  const url = `${SERVER_URL}/photos/${id}`;

  const body = {
    photos: photos,
  };

  try {
    const result = await axios.post(url, body);
    console.log(result)
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function deletePhoto(id) {
  return { deletePhoto: id };
}
