const getOption = (body, method) => {
  if (method === 'GET') return {};
  return {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
};

const fetchPost = async (url, body, method = 'GET') => {
  const res = await fetch(url, getOption(body, method));
  return await res.json();
};

const apiCall = (action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return fetchPost('/api/addTask', { name: action.name }, 'POST');
    case 'UPDATE_TITLE':
      return fetchPost('/api/updateTitle', { title: action.title }, 'POST');
    case 'REMOVE_ALL':
      return fetchPost('/api/removeAll');
    case 'UPDATE_STATUS':
      return fetchPost(`/api/updateStatus/${action.id}`);
    case 'REMOVE_TASK':
      return fetchPost(`/api/removeTask/${action.id}`);
    default:
      return fetchPost('/api/todo');
  }
};

export default apiCall;
