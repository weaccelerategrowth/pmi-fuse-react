import React from 'react'
import './index.scss'

class Card extends React.Component {
    render() {
        var status;
        var buttonText;

        var imageUrl = this.props.item["thumbnail_2x_url"]

        const fullTitle = [
            <h2 class="c-card__title">{this.props.item.title}</h2>
        ]

        if (this.props.item.title.length <= 18) {
            fullTitle.push(<br></br>)
        }

        if (this.props.item.progress === 0) {
            status = "Not started"
            buttonText = "Start"
            
        } else {
            status = "In progress"
            buttonText = "Continue"
        }

        var progressWidth = this.props.item.progress;
        if (progressWidth >= 20) {
            var widthAsPercentage = progressWidth + "%";
        }
        
        

        if (this.props.item.progress) {
            var progress = [
                <div className="c-card__progress">
    
                    <div className="c-card__progress--bar" style={{width: widthAsPercentage}}>
                        <p>{widthAsPercentage}</p>
                    </div>
                    
                </div>
                ]
        }

        return (
            <div className="c-card pure-u-md-1-4 pure-u-1">

                <div class="c-card__inner">
                    <p class="c-card__status">{status}</p>
                        {fullTitle}
                    <div class="c-card__image" 
                        style={{
                            backgroundImage: "linear-gradient(rgba(255, 20, 116, 0.3), rgba(255, 168, 65, 0.4)), url("+ imageUrl + ")"
                            }}>
                        {progress}
                    </div>
                    <div className="c-card__button">
                        <a href="/" className="o-btn u-btn-primary">{buttonText}</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Card
