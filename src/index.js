import React from 'react'
import ReactDOM from 'react-dom'
//import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './scss/app.scss';
//import * as serviceWorker from './serviceWorker'

// View imports
import Home from './Views/Home'

window.authToken = document.querySelector('meta[name="auth-token"]').content

ReactDOM.render(<Home/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
