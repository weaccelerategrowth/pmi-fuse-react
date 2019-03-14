import React from 'react'
import Axios from 'axios'

import Section from '../Components/Section'
import Card from '../Components/Card'

import Community from '../Components/Community'
import Event from '../Components/Event'
import Survey from '../Components/Survey'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'https://pmitest.staging.fuseuniversal.com/api/v4.0',
            communities: [],
            events: [],
            surveys: [],
        }

        this.fetchCommunities()
        this.fetchEvents()
        this.fetchSurveys()
    }

    createPlanCards = () => {
    
        let planCards = []
        for (let i=0; i < 4; i++) {
            planCards.push(<Card></Card>)
        } 
        return planCards
    }

    async fetchCommunities() {
        let data = await Axios.get( this.state.baseUrl + '/communities?per_page=3&all=false&auth_token=6TyNmxub3y37Y_ja8qq_&swagger_request=true' )
        this.setState({ communities: data.data.communities })
    }
    async fetchEvents() {
        let data = await Axios.get( this.state.baseUrl + '/event_occurrences?per_page=3&all=false&sauth_token=6TyNmxub3y37Y_ja8qq_&swagger_request=true' )
        this.setState({ events: data.data.event_occurrences })  
    }

    async fetchSurveys() {
        let data = await Axios.get( this.state.baseUrl + '/surveys?auth_token=6TyNmxub3y37Y_ja8qq_&swagger_request=true')
        this.setState({ surveys: data.data.surveys })  
    }

    render() {
        return (
            <div class="view-container">

                <Section>
                    <h1>Learning plans</h1>
                    {this.createPlanCards()} 
                </Section>


                <Section>
                    <div class="o-container">
                        <div class="pure-g">
                            <div class="pure-u-1 pure-u-md-1-3">
                                {this.state.communities.map((item) =>
                                    <Community key={item.id} item={item}/>
                                )}
                            </div>
                            <div class="pure-u-1 pure-u-md-1-3">
                                {this.state.events.map((item) =>
                                    <Event key={item.id} item={item}></Event>
                                )}
                            </div>
                            <div class="pure-u-1 pure-u-md-1-3">
                                {this.state.surveys.map((item) =>
                                    <Survey key={item.id} item={item}></Survey>
                                )}
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        )
    }

}

export default Home
