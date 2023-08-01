import { API_URL } from './config';

export default (todo) => {
    const url = `${API_URL}/todos/${todo._id}`;
  
    return fetch(url, {
      method: 'PATCH', // or 'PUT' if your API requires it
      headers: {
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Add your access token here
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: todo.text,
        completed: todo.completed,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update todo');
        }
        return res.json();
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };