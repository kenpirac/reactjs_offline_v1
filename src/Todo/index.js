import React, { useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './todoSlice';

function Todo(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <h1 className="text-center">Todo</h1>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default Todo;
