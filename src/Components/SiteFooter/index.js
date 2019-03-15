import React, { Component } from 'react'
import './index.scss'

import logo from '../../images/pmi-logo@2x.png'


class SiteFooter extends Component {
    render() {
        return (
            <footer className="c-site-footer">
                <div className="o-container">
                    <div>Copyright 2019 Phillip Morris International</div>
                    <img src={window.cdnUrl + logo} alt="logo"/>
                </div>
            </footer>
        )
    }

}

export default SiteFooter