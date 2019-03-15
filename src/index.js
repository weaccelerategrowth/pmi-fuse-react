import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './scss/app.scss';
//import * as serviceWorker from './serviceWorker'

// View imports
import Home from './Views/Home'

window.authToken = document.querySelector('meta[name="auth-token"]').content;
window.cdnUrl = 'https://storage.googleapis.com/react-pmi-fuse';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
