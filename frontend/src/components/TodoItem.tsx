import React from 'react';
import { updateTodo, deleteTodo } from '../api';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, setTodos }) => {
  const handleToggle = async () => {
    try {
      const updatedTodo = await updateTodo(todo._id, {
        completed: !todo.completed,
      });
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t._id === todo._id ? updatedTodo : t))
      );
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo._id);
      setTodos((prevTodos) => prevTodos.filter((t) => t._id !== todo._id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span className="todo-text">{todo.title}</span>
      <button className="todo-delete" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;