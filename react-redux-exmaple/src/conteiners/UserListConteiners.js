import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserList from '../components/UserList';
import {
  getUserSagaStart,
  // getUsersPromise,
  // getUsersFail,
  // getUsersStart,
  // getUsersSuccess,
  getUsersThunk,
} from '../redux/moduls/users';
// import axios from 'axios';

const UserListConteiners = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  // const getUser = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get('https://api.github.com/users');
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (error) {
  //     dispatch(getUsersFail(error));
  //   }
  // }, [dispatch]);
  // const getUser = useCallback(() => dispatch(getUsersThunk()), [dispatch]);
  // const getUser = useCallback(() => dispatch(getUsersPromise()), [dispatch]);
  const getUser = useCallback(() => dispatch(getUserSagaStart()), [dispatch]);
  return <UserList users={users} getUser={getUser} />;
};

export default UserListConteiners;
