import React from 'react'

class Section extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="o-section">
                {this.props.children}
            </div>
        )

    }

}

export default Section
