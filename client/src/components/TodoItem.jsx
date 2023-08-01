import { useCallback, useState, useEffect, useContext } from 'react';
import { useQueryClient, useMutation } from 'react-query';

import deleteTodoRequest from '../api/deleteToDoRequests';
import updateTodoRequest from '../api/updateToDoRequests';

import { debounce } from 'lodash';
import { TokenContext } from '../App';
import PropTypes from 'prop-types'; // Import prop-types


export const TodoItem = ({ todo }) => {

    // Add prop type validation for the 'todo' prop
  TodoItem.propTypes = {
    todo: PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  
  const [text, setText] = useState(todo.text);
  const [token] = useContext(TokenContext);

  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const { mutate: deleteTodo } = useMutation(
    (updatedTodo) => deleteTodoRequest(updatedTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const debouncedUpdateTodo = useCallback(
    debounce(updateTodo, 600),
    [updateTodo]
  );

  useEffect(() => {
    return () => {
      debouncedUpdateTodo.cancel(); // Clean up the debounced function on unmount
    };
  }, []);

  return (
    <div
      style={{
        marginBottom: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        checked={todo.completed}
        type="checkbox"
        style={{
          marginRight: '5px',
          height: '34px',
          width: '34px',
        }}
        onChange={() =>
          updateTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />

      <input
        style={{
          padding: '8px',
          marginRight: '6px',
        }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        style={{
          padding: '5px',
          height: '35px',
          outline: 'none',
          border: 'none',
          color: 'white',
          backgroundColor: '#cc5a5a',
        }}
        onClick={() => deleteTodo(todo)}
      >
        delete
      </button>
    </div>
  );
};
