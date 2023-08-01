import  { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory to navigate back
import updateTodoRequest from '../api/updateToDoRequests'; // Import the function for updating todo
// import PropTypes from 'prop-types'; // Import prop-types

const UpdateItem = ({ todo }) => {



  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);
  const history = useHistory();


  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the updateTodoRequest function to update the todo item
      await updateTodoRequest({ ...todo, text, completed });

      // Redirect back to the todo list after successful update
      history.push('/');
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div>
      <h2>Update Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="completed">Completed</label>
          <input
            type="checkbox"
            id="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateItem;
