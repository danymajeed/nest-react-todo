import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Todo } from './types';
import { fetchTodos } from './api';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching todos:', error);
        setLoading(false);
      }
    };

    getTodos();
  }, []);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm setTodos={setTodos} />
      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <TodoList todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
};

export default App;