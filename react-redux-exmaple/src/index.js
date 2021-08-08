import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

// import ReduxContext from './contexts/ReduxContext';
// import { addTodo, completeTodo, show_complete } from './redux/actions';

//구독 리덕스 샅태가 변경될경우 출력
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addTodo({ text: 'coding', done: false }));
// store.dispatch(completeTodo(0));
// store.dispatch(show_complete());
//로그에 찍히지 않지만 상태는 변경됨
ReactDOM.render(
  <React.StrictMode>
    {/* <ReduxContext.Provider value={store}> */}
    <Provider store={store}>
      <App />
      {/* <App store={store} /> */}
    </Provider>
    {/* </ReduxContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
