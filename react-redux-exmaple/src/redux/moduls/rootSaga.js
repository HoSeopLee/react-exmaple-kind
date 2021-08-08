import { all } from '@redux-saga/core/effects';
import { userSaga } from './users';

export default function* rootSaga() {
  yield all([userSaga()]);
}
