import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../redux/moduls/todos';
// const TodoFormConteiners = connect(
//   ({ todos }) => ({}),
//   (dispatch) => ({
//     addTodo: (text) => dispatch(addTodo(text)),
//   })
// )(TodoForm);

// export default TodoFormConteiners;

const TodoFormConteiners = () => {
  const dispatch = useDispatch();
  const adds = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  return <TodoForm addTodo={adds} />;
};

export default TodoFormConteiners;
