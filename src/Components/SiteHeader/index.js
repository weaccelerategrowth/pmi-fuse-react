import React, { Component } from 'react'
import './index.scss'

import logo from '../../images/fuse-pmi-logo@2x.png'
import fuseLogo from '../../images/pmi-logo-large@2x.png'


class SiteHeader extends Component {
    render() {

        const styles = {
            backgroundImage: "linear-gradient(#ff1474, #ffa841), url('" + window.cdnUrl + fuseLogo + "')"
        }

        return (
            <header className="c-site-header" style={styles}>
                <div className="o-container">
                    <nav className="c-site-header__nav">
                        {/* <img src={window.cdnUrl + logo} alt="logo" className="c-site-header__logo"></img>
                        <div className="c-site-header__meta">
                            Logged in as {this.props.me.name} {this.props.me.family_name}
                            <a className="c-site-header__logout" href="/users/sign_out">Sign out</a>
                        </div> */}
                    </nav>

                    <h1 className="c-site-header__welcome step-1 step-6">Welcome back, {this.props.me.name}</h1>
                </div>
            </header>
        )
    }

}

export default SiteHeader