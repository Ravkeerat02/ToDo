const API_URL = 'http://localhost:8080'

//promose - used to run the .then function

export default (todo) => {
    return fetch(`${API_URL}/todos/${todo._id}`,{
        method: 'GET',
        headers: {
            // Authorization : `Bearer `
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: todo.text,
            completed: todo.completed
        })
    })
    .then(res => res.json())
}