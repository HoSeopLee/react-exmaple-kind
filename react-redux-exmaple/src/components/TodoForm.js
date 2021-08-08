import React, { useRef } from 'react';
// import useReduxDispatch from '../hooks/useReudxDispatch';

const TodoForm = (props) => {
  const { addTodo } = props;
  const inputRef = useRef();
  // const dispatch = useReduxDispatch();

  const click = () => {
    // dispatch(addTodo({ text: inputRef.current.value, done: false }));
    addTodo({ text: inputRef.current.value, done: false });
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
};

export default TodoForm;
