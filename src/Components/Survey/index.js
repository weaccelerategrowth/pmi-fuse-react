import React, { Component } from 'react'
import './index.scss'

class Survey extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="c-community">
                <div class="o-image-overflow">
                    <img src={this.props.item.image_url} className="img-fluid" />
                </div>
                <div class="c-community__content">
                    <h3 class="c-community__name">{this.props.item.name}</h3>
                </div>
            </div>
        )
    }
}

export default Survey