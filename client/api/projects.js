import axios from "axios";
const SERVER_URL = "http://127.0.0.1:3000";

export async function getProjects() {
  const url = `${SERVER_URL}/projects`;

  try {
    const result = await axios.get(url);
    const data = result.data;
    return data.data;
  } catch (error) {
    return error;
  }
}

export async function createProject() {
  const url = `${SERVER_URL}/projects`;
  const body = {
    timestamp: Date.now(),
  };

  try {
    const result = await axios.post(url, body);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function getProject(id) {
  console.log("getting:", id)
  const url = `${SERVER_URL}/projects/${id}`;

  try {
    const result = await axios.get(url);
    const data = result.data;
    return data;
  } catch (error) {
    return error;
  }
}

export async function saveProject(project) {
  const id = project.id;
  const url = `${SERVER_URL}/projects/${id}`;

  const body = {
    project: project,
    // photos: photos,
  };

  try {
    const result = await axios.put(url, body);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function deleteProject(id) {
  console.log("delete project: ", id);
  const url = `${SERVER_URL}/projects/${id}`;

  try {
    const result = await axios.delete(url);
    return result.data;
  } catch (error) {
    return error;
  }
}
