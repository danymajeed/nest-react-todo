import React, { useState } from 'react';
import { createTodo } from '../api';
import { Todo } from '../types';

interface TodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoForm: React.FC<TodoFormProps> = ({ setTodos }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const newTodo = await createTodo(title);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTitle('');
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;