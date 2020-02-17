import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './ScrollToTop';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./Store/Reducers";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import 'babel-polyfill';
const store = createStore(combineReducers(reducers), compose(applyMiddleware(thunk)));
ReactDOM.hydrate( 
    <Provider store = { store } >
        <BrowserRouter >
            <ScrollToTop >
                <App />
            </ScrollToTop> 
        </BrowserRouter> 
    </Provider>, 
    document.getElementById('hospitallcare'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();