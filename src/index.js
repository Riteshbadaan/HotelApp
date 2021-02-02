import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,combineReducers } from 'redux'
import Authreducer from './store/reducers/Authreducer'
import Searchreducer from './store/reducers/Searchreducer'
import Bookingreducer from './store/reducers/Bookingreducer'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';

const rootreducer = combineReducers({
  authreducer:Authreducer,
  searchreducer:Searchreducer,
  bookingreducer:Bookingreducer,
})

const store = createStore(rootreducer,applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
