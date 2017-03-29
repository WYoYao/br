import React, { Component } from 'react';
import {Router,Route,hashHistory} from 'react-router';
import {createStore,combineReducers} from 'redux';
import { Provider } from 'react-redux';
import Home from "./page/reducer.js";
import HomePage from './page/Home.js';

// console.log(Home);

// console.log(combineReducers({
//   Home
// }));



let store=createStore(combineReducers({
  Home:Home
}));



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={HomePage}/>
        </Router>
      </Provider>
    );
  }
}


export default App;
