import axios from 'axios';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

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

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export const show_all = () => {
  return { type: SHOW_ALL };
};
export const show_complete = () => {
  return { type: SHOW_COMPLETE };
};

//usrs
export const GET_USERS_START = 'GET_USERS_START'; //깃헙 API 호출 시작하는 것을 의미
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'; //깃헙 API 호출에대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_FAIL = 'GET_USERS_FAIL'; //깃헙 API 호출에대한 응답이 실패한 경우

export const getUsersStart = () => {
  return {
    type: GET_USERS_START,
  };
};
export const getUsersSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
};
export const getUsersFail = (error) => {
  return {
    type: GET_USERS_FAIL,
    error,
  };
};

export const getUsersThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
};
const GET_USER = 'GET_USER';

export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_FULFILLED = 'GET_USER_FULFILLED';
export const GET_USER_REJECTED = 'GET_USER_REJECTED';

export const getUsersPromise = () => {
  return {
    type: GET_USER,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users');
      return res.data;
    },
  };
};
