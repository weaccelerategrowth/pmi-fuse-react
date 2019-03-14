import React from 'react'
import Section from '../Components/Section'
import Card from '../Components/Card'

class Home extends React.Component {
    createPlanCards = () => {
    
        let planCards = []
        for (let i=0; i < 4; i++) {
            planCards.push(<Card></Card>)
        } 
        return planCards
    }
    
    render() {
        return (
            <Section>
                <h1>Learning plans</h1>
                {this.createPlanCards()}             
            </Section>
        )
    }

}

export default Home
