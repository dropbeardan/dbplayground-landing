import React from 'react';
import { connect } from 'react-redux';

import './Home.less';

import { NavCard, TechIcon } from './index';
import { JourneyTracker } from '../../Services';

@connect((store) => {
    return {
        homeState: store.home
    }
})
export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEntered: false
        };

        this.siteEntered = this.siteEntered.bind(this);
        this.mapNavCards = this.mapNavCards.bind(this);
        this.mapTechIcons = this.mapTechIcons.bind(this);
    }

    mapNavCards(props) {
        return props.map((prop, index) => {
            return <NavCard key={index} {...prop} />;
        });
    }

    mapTechIcons(props) {
        return props.map((prop, index) => {
            return <TechIcon key={index} {...prop} />
        });
    }

    siteEntered() {
        return this.setState({
            ...this.state,
            isEntered: true
        });
    }

    render() {
        const homeState = this.props.homeState;

        return (
            <section className='Home' onClick={(e) => { this.siteEntered() }}>
                <section className={this.state.isEntered ? 'primary entered' : 'primary'}>
                    <section className={this.state.isEntered ? 'landing entered' : 'landing'}>
                        <header>Welcome to the <br /> Drop Bear Play Ground</header>
                        <main>Click anywhere to continue</main>
                    </section>

                    <section className={this.state.isEntered ? 'navPanel entered' : 'navPanel'}>
                        {this.mapNavCards(homeState.navRoutes)}
                    </section>
                </section>

                <section className={this.state.isEntered ? 'secondary entered' : 'secondary'}>
                    <section className='techPanel'>
                        <header>Powered By</header>
                        <main>
                            {this.mapTechIcons(homeState.technologies)}
                        </main>
                    </section>

                    <section className='mascot'>
                        <img src={homeState.mascot} />
                    </section>
                </section>

                <JourneyTracker />
            </section >
        );
    };
};