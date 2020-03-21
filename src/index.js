import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';
let persistedState={data:[]};

// console.log(localStorage.getItem('ABC')!=undefined);

if(localStorage.getItem('ABC')!=null && localStorage.getItem('ABC')!=undefined)
  persistedState=((JSON.parse(localStorage.getItem('ABC'))));
  

const store = createStore(
    rootReducer, 
    persistedState
  )

store.subscribe(()=>{
    localStorage.setItem('ABC', JSON.stringify(store.getState()))
  })




ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();