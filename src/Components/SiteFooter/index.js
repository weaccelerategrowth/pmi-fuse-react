import React, { Component } from 'react'
import './index.scss'


class SiteFooter extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer class="c-site-footer">
                <div class="o-container">
                    <div>Copyright 2019 Phillip Morris International</div>
                    <div>logo goes here</div>
                </div>
            </footer>
        )
    }

}

export default SiteFooter