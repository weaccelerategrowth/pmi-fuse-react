import React, { Component } from 'react'
import './index.scss'

import logo from '../../images/fuse-pmi-logo@2x.png'


class SiteHeader extends Component {
    render() {
        return (
            <header className="c-site-header">
                <div className="o-container">
                    <nav className="c-site-header__nav">
                        <img src={logo} alt="logo" className="c-site-header__logo"></img>
                        <div className="c-site-header__meta">
                            Logged in as {this.props.me.name} {this.props.me.family_name}
                            <a className="c-site-header__logout" href="/users/sign_out">Sign out</a>
                        </div>
                    </nav>

                    <h1 className="c-site-header__welcome">Welcome back, {this.props.me.name}</h1>
                </div>
            </header>
        )
    }

}

export default SiteHeader