import React, { Component } from 'react'
import './index.scss'


class SiteHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header class="c-site-header">
                <div class="o-container">
                    <nav class="c-site-header__nav">
                        <img src="/assets/images/fuse-pmi-logo.jpg"></img>
                        <div class="c-site-header__meta">
                            Logged in as {this.props.me.name} {this.props.me.family_name}
                            <a class="c-site-header__logout" href="/users/sign_out">Sign out</a>
                        </div>
                    </nav>

                    <h1 class="c-site-header__welcome">Welcome back, Mr {this.props.me.name}</h1>
                </div>
            </header>
        )
    }

}

export default SiteHeader