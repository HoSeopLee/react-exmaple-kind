//액션 타입 정의
const ADD_TODO = 'redux-start/todos/ADD_TODO';
const COMPLETE_TODO = 'redux-start/todos/COMPLETE_TODO';

//액션 생성 함수
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload, // 공통 변수를 사용하기위한 나는 이방법으로 사용함
    todo: payload, // 같은 이름일 경우 하나만 사용해도 문제 없음.
  };
};

export const completeTodo = (index) => {
  return {
    type: COMPLETE_TODO,
    index,
  };
};
//초기값
const initialState = [];

//리듀서;
const reducer = (previusState = initialState, action) => {
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

export default reducer;
