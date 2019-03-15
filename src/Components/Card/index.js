import React from 'react'
import './index.scss'

class Card extends React.Component {
    render() {
        return (
            <div className="c-card pure-u-md-1-4 pure-u-1">

                <div className="c-card__inner">
                    <p className="c-card__status">In progress</p>
                    <h2 className="c-card__title">Our Products, Our Science</h2>
                    <div className="c-card__image">
                        <img src="https://i.imgur.com/Oc0y5Ao.png" alt=""></img>
                        <div className="c-card__progress"></div>
                    </div>
                    <div className="c-card__button">
                        <a href="/" className="button-primary">Continue</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Card
