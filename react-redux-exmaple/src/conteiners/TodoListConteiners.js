import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

// const TodoListConteiners = connect(
//   ({ todos }) => ({
//     todos: todos,
//   }),
//   (dispatch) => ({})
// )(TodoList);

// export default TodoListConteiners;

const TodoListConteiners = () => {
  const todos = useSelector((state) => state.todos);
  return <TodoList todos={todos} />;
};

export default TodoListConteiners;
