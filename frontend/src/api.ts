import axios from 'axios';
import { Todo } from './types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

export const createTodo = async (title: string): Promise<Todo> => {
  const response = await axios.post(`${API_URL}/todos`, { title });
  return response.data;
};

export const updateTodo = async (id: string, data: Partial<Todo>): Promise<Todo> => {
  const response = await axios.put(`${API_URL}/todos/${id}`, data);
  return response.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/todos/${id}`);
};