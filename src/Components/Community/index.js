import React, { Component } from 'react'
import './index.scss'

class Community extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="o-fancy-box c-community">
                <div className="o-fancy-box__image o-image-overflow">
                    <img src={this.props.item.image_url} className="img-fluid" />
                </div>
                <div className="o-fancy-box__content c-community__content">
                    <h3 className="o-fancy-box__title c-community__name">{this.props.item.name}</h3>
                </div>
            </div>
        )
    }
}

export default Community