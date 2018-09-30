import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './App';
import app from './reducers/appReducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    app,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
