import React from 'react'
import './index.css'
// import introJs from 'intro.js';

class Section extends React.Component {


    render() {
        return (
            <div className="o-section">
                {this.props.children}
            </div>
        )

    }

}

export default Section
