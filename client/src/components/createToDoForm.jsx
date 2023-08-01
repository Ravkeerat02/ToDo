import { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import createTodoRequest from '../api/createToDoRequests';
import { TokenContext } from '../App';
import '../App.css'

export const CreateTodoForm = () => {
  const [text, setText] = useState('');
  const [token] = useContext(TokenContext);

  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        createTodo({
          text,
        });
        setText('');
      }}
    >
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        style={{
          padding: '8px',
          marginRight: '6px',
        }}
      />
     <button
  style={{
    padding: '10px 30px',
    height: '40px', // Changed height to make the button more visible
    outline: 'none',
    border: 'none',
    color: 'white',
    backgroundColor: '#00c348',
    borderRadius: '20px',
    cursor: 'pointer',
  }}
>
  Create
</button>
      <br />
      <time className="time">{new Date().toLocaleTimeString()}</time>
      <br />
        <br />
      <a href = "./login">Back to login</a>
    </form>
  );
};