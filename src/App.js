import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './static/custom.scss';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/home'
import Demo1 from './pages/demo1'
import Demo from './pages/demo'


import { logger } from 'redux-logger';
import reducer from './redux/reducers/index';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';


const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  reducer,
    (process.env.REACT_APP_ENV === "production" || process.env.REACT_APP_ENV === "development") ? applyMiddleware(sagaMiddleware) : applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);


function App() {
  return (
    <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/demo/:id" component={Demo1} />
            <Route exact path="/demo" component={Demo} />
          </div>
        </Router>
    </Provider>
  );
}

export default App;
