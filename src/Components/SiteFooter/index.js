import React, { Component } from 'react'
import './index.scss'

import logo from '../../images/pmi-logo@2x.png'


class SiteFooter extends Component {
    render() {
        return (
            <footer class="c-site-footer">
                <div class="o-container">
                    <div>Copyright 2019 Phillip Morris International</div>
                    <img src={logo} alt="logo"/>
                </div>
            </footer>
        )
    }

}

export default SiteFooter