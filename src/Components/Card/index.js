import React from 'react'
import './index.scss'

class Card extends React.Component {
    render() {
        return (
            <div class="c-card pure-u-md-1-4 pure-u-1">
                <p class="c-card__status">In progress</p>
                <h2 class="c-card__title">Our Products, Our Science</h2>
                <div class="c-card__image">
                    <img src="" alt=""></img>
                    <div class="c-card__progress"></div>
                </div>
                <div class="c-card__button">
                    <a href="/" class="button-primary">Continue</a>
                </div>
            </div>
        )
    }
}

export default Card
