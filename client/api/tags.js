import axios from "axios";
// const SERVER_URL = "http://127.0.0.1:3000";

import config from "./serverconfig.js";
const SERVER_URL = config.SERVER_URL;

export async function getTags(id) {
  const url = `${SERVER_URL}/tags/${id}`;

  try {
    const result = await axios.get(url);
    const data = result.data;
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function saveTags(tags) {
  const url = `${SERVER_URL}/tags`;

  const body = {
    tags: tags,
  };

  try {
    const result = await axios.put(url, body);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function deleteTag(id) {
  return { deleteTag: id };
}
