import { useState, useEffect, useContext } from 'react';
import ReduxContext from '../contexts/ReduxContext';
const useReudxState = () => {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
};

export default useReudxState;
