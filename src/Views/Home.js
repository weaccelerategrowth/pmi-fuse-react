import React from 'react'
import Axios from 'axios'

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
        let data = await Axios.get( this.buildUrl( '/learning-plans', { per_page: 4, all: false } ) )
        this.setState({ plans: data.data.learning_plans }) 
    }

    render() {
        return (
            <div class="view-container">

                <SiteHeader me={this.state.me} />

                <Section>
                    <div class="o-container">
                        <h1>Learning plans</h1>
                        <div class="pure-g">
                            <div class="pure-u-1">
                                {this.state.plans.map((item) => 
                                    <Card key={item.id} item={item}/>
                                )}
                            </div>
                        </div>
                    </div>
                </Section>


                <Section>
                    <div class="o-container">
                        <div class="pure-g c-listing-grid">
                            <div class="pure-u-1 pure-u-lg-1-3">
                                <h2>Your communities</h2>
                                <div class="c-listing-grid__items">
                                    {this.state.communities.map((item) =>
                                        <Community key={item.id} item={item}/>
                                    )}
                                </div>
                                <a href="/communities">View all communities</a>
                            </div>
                            <div class="pure-u-1 pure-u-lg-1-3">
                                <h2>Your events</h2>
                                <div class="c-listing-grid__items">
                                    {this.state.events.map((item) =>
                                        <Event key={item.id} item={item}></Event>
                                    )}
                                </div>
                                <a href="/events">View all events</a>
                            </div>
                            <div class="pure-u-1 pure-u-lg-1-3">
                                <h2>Your topics</h2>
                                <div class="c-listing-grid__items">
                                    {this.state.topics.map((item) =>
                                        <Topic key={item.id} item={item}></Topic>
                                    )}
                                </div>
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
