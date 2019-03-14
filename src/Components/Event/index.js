import React, { Component } from 'react'
import './index.scss'

class Event extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="o-fancy-box c-event">
                <div class="o-fancy-box__image o-image-overflow">
                    <img src={this.props.item.image_url} className="img-fluid" />
                </div>
                <div class="o-fancy-box__content c-event__content">
                    <h3 class="o-fancy-box__title c-event__name">{this.props.item.event_name}</h3>
                </div>
            </div>
        )
    }
}

export default Event