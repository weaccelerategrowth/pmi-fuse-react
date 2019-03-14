import React, { Component } from 'react'
import './index.scss'

class Topic extends Component {
    render() {
        return (
            <div className="o-fancy-box c-topic">
                <div class="o-fancy-box__image o-image-overflow">
                    <img src={this.props.item.image_url} alt={this.props.item.name} className="img-fluid" />
                </div>
                <div class="o-fancy-box__content c-topic__content">
                    <h3 class="o-fancy-box__title c-topic__name">{this.props.item.name}</h3>
                </div>
            </div>
        )
    }
}

export default Topic