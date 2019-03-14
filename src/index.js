import React from 'react'
import ReactDOM from 'react-dom'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './scss/app.scss';
import * as serviceWorker from './serviceWorker'

// View imports
import Home from './Views/Home'

const routing = (
    <Router>
        <div>
            <ul>
                <li>    
                    <NavLink exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
            </ul>
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
