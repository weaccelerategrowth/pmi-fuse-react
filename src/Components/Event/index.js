import React, { Component } from 'react'
import './index.scss'

import eventPlaceholder from '../../images/event-placeholder@2x.png'

class Event extends Component {
    eventUrl() {
        return '/events/' + this.props.item.id
    }

    render() {
        return (
            <div className="o-fancy-box c-event">
                <div className="o-fancy-box__image o-image-overflow">
                    <img src={this.props.item.image_url ? this.props.item.image_url : eventPlaceholder} alt={this.props.item.event_name} className="img-fluid" />
                </div>
                <div className="o-fancy-box__content c-event__content">
                    <h3 className="o-fancy-box__title c-event__name">{this.props.item.event_name}</h3>
                    <span class="o-fancy-box__meta">{this.props.item.starts_at_date}</span>
                </div>

                <a href={this.eventUrl()} className="o-btn u-btn-primary pos-br-offset">Visit event</a>
            </div>
        )
    }
}

export default Event