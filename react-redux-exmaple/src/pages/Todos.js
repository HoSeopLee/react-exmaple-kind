import React from 'react';
import TodoFormConteiners from '../conteiners/TodoFormConteiners';
import TodoListConteiners from '../conteiners/TodoListConteiners';

const Todos = () => {
  return (
    <div>
      <TodoListConteiners />
      <TodoFormConteiners />
    </div>
  );
};

export default Todos;
