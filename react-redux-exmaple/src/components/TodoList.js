import React from 'react';
import { connect } from 'react-redux';
// import useReudxState from '../hooks/useReduxState';

const TodoList = (props) => {
  // const state = useReudxState();
  const { todos } = props;
  return (
    <ul>
      {/* {state.todos.map((todo) => { */}
      {todos.map((todo, key) => {
        return (
          <ul key={key}>
            <li>{todo.text}</li>
          </ul>
        );
      })}
    </ul>
  );
};

export default connect(
  ({ todos }) => ({
    todos: todos,
  }),
  (dispatch) => ({})
)(TodoList);
