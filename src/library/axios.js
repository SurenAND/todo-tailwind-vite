import axios from "axios";

const BASE_URL = "http://localhost:5001";

// Fetch tasks from the API
export async function fetchTasks(page = 1, searchParam = "", perPage = 5) {
  const response = await axios.get(
    `${BASE_URL}/tasks?_page=${page}&&taskName_like=${searchParam}&_limit=${perPage}`
  );
  return {
    data: response.data,
    totalItems: response.headers["x-total-count"],
    totalPage: Math.ceil(response.headers["x-total-count"] / perPage),
  };
}

// Add a task using the API
export async function addTaskApi(task) {
  const response = await axios.post(`${BASE_URL}/tasks`, task);
  return response.data;
}

// Edit a task using the API
export async function editTaskApi(taskId, task) {
  const response = await axios.put(`${BASE_URL}/tasks/${taskId}`, task);
  return response;
}

// Delete a task using the API
export async function deleteTaskApi(taskId) {
  const response = await axios.delete(`${BASE_URL}/tasks/${taskId}`);
  return response;
}
