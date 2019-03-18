import React from 'react'
import Axios from 'axios'
import introJs from 'intro.js'
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';

import Joyride from 'react-joyride';

import SiteHeader from '../Components/SiteHeader'
import SiteFooter from '../Components/SiteFooter'

import Section from '../Components/Section'
import Card from '../Components/Card'

import Community from '../Components/Community'
import Event from '../Components/Event'
import Topic from '../Components/Topic'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'https://pmitest.staging.fuseuniversal.com/api/v4.0',
            me: {},
            communities: [],
            events: [],
            topics: [],
            plans: [],
            steps: [
                {
                  target: '.step-1',
                  content: 'Welcome to your new Fuse home. Follow this tour to learn about the new layout.',
                  placement: 'bottom',
                  placementBeacon: 'bottom',
                },
                {
                  target: '.step-2',
                  content: 'These are your learning plans. Carry on from where you left off or start a new plan.',
                  disableScrolling: 'false',
                  placement: 'bottom',
                  placementBeacon: 'bottom',
                },
                {
                    target: '.step-3',
                    content: 'Your communities are displayed here. Click one to go to the communities\'s home.',
                    disableScrolling: 'false',
                    placement: 'bottom',
                    placementBeacon: 'bottom',
                },
                {
                    target: '.step-4',
                    content: 'These are your upcoming events. Events are organised by the communities you are part of. Click a card to view more details.',
                    disableScrolling: 'false',
                    placement: 'bottom',
                    placementBeacon: 'bottom',
                },
                {
                    target: '.step-5',
                    content: 'These are some suggested topics, we\'ve picked ones that we think you might be interested in.',
                    disableScrolling: 'false',
                    placement: 'bottom',
                    placementBeacon: 'bottom',
                },
                {
                    target: '.step-6',
                    content: 'We hope you enjoy the new Fuse!',
                    disableScrolling: 'false',
                    placement: 'bottom',
                    placementBeacon: 'bottom',
                },
            ]
        }

        this.fetchMe()
        this.fetchCommunities()
        this.fetchEvents()
        this.fetchTopics()
        this.fetchPlans()
    }

    buildUrl( path, params ) {
        let query = Object.keys(params).map(key => key + '=' + params[key]).join('&');
        let url = this.state.baseUrl + path + '?auth_token=' + window.authToken
        if ( query ) url += '&' + query
        return url
    }

    async fetchMe() {
        let data = await Axios.get( this.buildUrl( '/users/me', {} ) )
        this.setState({ me: data.data })
    }

    async fetchCommunities() {
        let data = await Axios.get( this.buildUrl( '/communities', { per_page: 3, all: false } ) )
        this.setState({ communities: data.data.communities })
    }
    async fetchEvents() {
        let data = await Axios.get( this.buildUrl( '/event_occurrences', { per_page: 3, all: false } ) )
        this.setState({ events: data.data.event_occurrences })  
    }

    async fetchTopics() {
        let data = await Axios.get( this.buildUrl( '/topics', { per_page: 3, all: false } ) )
        this.setState({ topics: data.data.topics.slice(0, 3) })  
    }

    async fetchPlans() {
        let data = await Axios.get( this.buildUrl( '/learning-plans/my' , { per_page: 4 } ) )
        this.setState({ plans: data.data.learning_plans }) 
    }

    render() {

        const { steps } = this.state;

        return (
            
            <div className="view-container" >
                <Joyride steps={steps}
                        styles={{
                        options: {
                        arrowColor: '#FF1474',
                        backgroundColor: '#FF1474',
                        overlayColor: 'rgba(0, 0, 0, 0.2)',
                        primaryColor: '#FF1474',
                        textColor: '#fff',
                        width: 300,
                        zIndex: 1000,
                        }
                        
                    }}
                    showProgress={true}
                    continuous={true}
                    showSkipButton={true}
                    locale {...{back: 'Back', close: 'Close', last: 'Finish', next: 'Next', skip: 'Skip'}}
                />
                <SiteHeader me={this.state.me}/>

                <Section>
                    <div className="o-container step-2">
                        <h2 >Your learning plans</h2>
                        <br></br>
                        <div class="pure-g">
                            <div class="pure-u-1">
                                {this.state.plans.map((item) => 
                                    <Card key={item.id} item={item}/>
                                )}
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <a href="/learning-plans" className="u-small-link">View all learning plans</a>
                    </div>
                </Section>


                <Section>
                    <div className="o-container">
                        <div className="pure-g c-listing-grid">
                            <div className="pure-u-1 pure-u-lg-1-3 step-3">
                                <h2>Your communities</h2>
                                <br></br>
                                <div className="c-listing-grid__items">
                                    {this.state.communities.map((item) =>
                                        <Community key={item.id} item={item}/>
                                    )}
                                </div>
                                <a href="/communities" className="u-small-link">View all communities</a>
                            </div>
                            <div className="pure-u-1 pure-u-lg-1-3 step-4">
                                <h2>Your events</h2>
                                <br></br>
                                <div className="c-listing-grid__items">
                                    {this.state.events.map((item) =>
                                        <Event key={item.id} item={item}></Event>
                                    )}
                                </div>
                                <a href="/events" className="u-small-link">View all events</a>
                            </div>
                            <div className="pure-u-1 pure-u-lg-1-3 step-5">
                                <h2>Your topics</h2>
                                <br></br>
                                <div className="c-listing-grid__items">
                                    {this.state.topics.map((item) =>
                                        <Topic key={item.id} item={item}></Topic>
                                    )}
                                </div>
                                <a href="/topics" className="u-small-link">View all topics</a>
                            </div>
                        </div>
                    </div>
                </Section>

                <SiteFooter/>



            </div>
        )
    }

}

export default Home
