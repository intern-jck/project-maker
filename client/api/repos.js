import axios from "axios";
const SERVER_URL = "http://127.0.0.1:3000";

export async function getRepos(id) {
  const url = `${SERVER_URL}/repos/${id}`;

  try {
    const result = await axios.get(url);
    const data = result.data;
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function saveRepos(repos) {
  const url = `${SERVER_URL}/repos/`;

  const body = {
    repos: repos,
  };

  try {
    const result = await axios.put(url, body);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function deleteRepo(id) {
  return { deleteRepo: id };
}
