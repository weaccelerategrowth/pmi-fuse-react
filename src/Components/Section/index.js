import React from 'react'
import './index.css'

class Section extends React.Component {
    render() {
        return (
            <div class="o-section">
                {this.props.children}
            </div>
        )

    }

}

export default Section
