const serverUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';
const createTask = (taskData) => {
  fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
};
const updateTask = (taskDate) => {

};

const deleteTask = (tasId) => {

};

export const getTasks = () => fetch(serverUrl)
  .then((response) => response.json());
