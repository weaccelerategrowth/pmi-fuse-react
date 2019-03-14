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
                <h2>Learning plans</h2>
                <Container>
                {this.createPlanCards()}
                </Container>
            </Section>
        )
    }

}

export default Home
