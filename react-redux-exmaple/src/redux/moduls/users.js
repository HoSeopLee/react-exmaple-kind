import axios from 'axios';
import { push } from 'connected-react-router';
import { call, put, delay, takeEvery } from 'redux-saga/effects';
//액션 타입정의
const GET_USERS_START = 'redux-start/users/GET_USERS_START'; //깃헙 API 호출 시작하는 것을 의미
const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS'; //깃헙 API 호출에대한 응답이 성공적으로 돌아온 경우
const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL'; //깃헙 API 호출에대한 응답이 실패한 경우

//액션 생성 함수
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

//redux promise-middleware
const GET_USER = 'redux-start/users/GET_USER';
export const GET_USER_PENDING = 'redux-start/users/GET_USER_PENDING';
export const GET_USER_FULFILLED = 'redux-start/users/GET_USER_FULFILLED';
export const GET_USER_REJECTED = 'redux-start/users/GET_USER_REJECTED';

//초기값
const initalState = {
  loading: false,
  data: [],
  error: null,
};

//리듀서
const users = (state = initalState, action) => {
  if (action.type === GET_USERS_START || action.type === GET_USER_PENDING) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  }
  if (action.type === GET_USER_FULFILLED) {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
  if (action.type === GET_USER_REJECTED) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  return state;
};

export default users;

//reudx-promise-middleware
export const getUsersPromise = () => {
  return {
    type: GET_USER,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users');
      return res.data;
    },
  };
};
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
//redux thunk

export const getUsersThunk = () => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      //sleep
      await sleep(2000);
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
      history.push('/');
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
};
const GET_USER_SAGA_START = 'GET_USER_SAGA_START';

//redux-saga
function* getUserSaga(actions) {
  try {
    yield put(getUsersStart());
    //sleep
    yield delay(2000);
    const res = yield call(axios.get, 'https://api.github.com/users');
    yield put(getUsersSuccess(res.data));
    yield put(push, '/');
    // history.push('/');
  } catch (error) {
    yield put(getUsersFail(error));
  }
}
export function getUserSagaStart() {
  return {
    type: GET_USER_SAGA_START,
  };
}

export function* userSaga() {
  yield takeEvery(GET_USER_SAGA_START, getUserSaga);
}
