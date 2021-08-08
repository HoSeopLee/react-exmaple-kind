import { createActions, handleActions } from 'redux-actions'; //액션 생성 함수가 됨

export const { showAll, showComplete } = createActions(
  'SHOW_ALL,SHOW_COMPLETE',
  {
    prefix: 'redux-start/filter/',
  }
);
//액션 타입 정의
// const SHOW_ALL = 'redux-start/filter/SHOW_ALL';
// const SHOW_COMPLETE = 'redux-start/filter/SHOW_COMPLETE';

//액션 생성 함수 정의
// export const show_all = () => {
//   return { type: SHOW_ALL };
// };
// export const show_complete = () => {
//   return { type: SHOW_COMPLETE };
// };
//초기값
const initialState = 'ALL';

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => 'ALL',
    SHOW_COMPLETE: (state, action) => 'COMPLETE',
  },
  initialState,
  { prefix: 'redux-start/filter/' }
);

//리듀서
// const reducer = (previusState = initialState, action) => {
//   if (action.type === SHOW_ALL) {
//     return 'ALL';
//   }
//   if (action.type === SHOW_COMPLETE) {
//     return 'COMPLETE';
//   }
//   return previusState;
// };
export default reducer;
