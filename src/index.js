import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';

let persistedState;

if(localStorage.getItem('reduxState')!=null)
  persistedState=((JSON.parse(localStorage.getItem('reduxState'))));

else 
  persistedState={data:[]};
  
  
console.log(localStorage.getItem('reduxState')==null)

const store = createStore(
    rootReducer, 
    persistedState
  )

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })




ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();