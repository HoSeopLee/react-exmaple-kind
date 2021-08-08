import React, { useEffect } from 'react';
const UserList = (props) => {
  const { users, getUser } = props;
  useEffect(() => {
    getUser();
  }, [getUser]);

  if (users?.data?.length === 0) {
    return <p>현재 유저 정보 없음</p>;
  }

  return (
    <ul>
      {users.data?.map((user, key) => (
        <li key={key}>{user.login}</li>
      ))}
    </ul>
  );
};

export default UserList;
