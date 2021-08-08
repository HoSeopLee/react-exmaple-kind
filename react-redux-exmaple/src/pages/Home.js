import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(push('Todos'));
  };
  return (
    <div>
      <h1>HOME</h1>
      <ol>
        <li>
          <Link to="/Todos">Todos</Link>
        </li>
      </ol>
      <ol>
        <li>
          <Link to="/Users">Users</Link>
        </li>
      </ol>
      <button onClick={click}>todo이동</button>
    </div>
  );
};

export default Home;
