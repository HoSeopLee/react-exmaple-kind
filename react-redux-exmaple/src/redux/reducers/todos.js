import { ADD_TODO, COMPLETE_TODO } from '../actions';
const initialState = [];
const todos = (previusState = initialState, action) => {
  //초기값을 설정해주는 부분

  if (action.type === ADD_TODO) {
    return [...previusState, action.payload];
  }
  if (action.type === COMPLETE_TODO) {
    return previusState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      } else {
        return todo;
      }
    });
  }
  return previusState;
};

export default todos;
