import React from 'react';
import { connect } from 'react-redux';

import './Profiles.less';

import { FullMenu } from '../../Navs';
import { ProfileCard } from './index';
import { JourneyTracker } from '../../Services';

@connect((store) => {
    return {
        profileState: store.profile
    }
})
export default class Profiles extends React.Component {

    constructor(props) {
        super(props);

        this.mapProfiles = this.mapProfiles.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    mapProfiles(profiles) {
        return profiles.map((profile, index) => {
            return (
                <ProfileCard key={index} {...profile} />
            );
        });
    }

    render() {
        let profileState = this.props.profileState;

        return (
            <section className='Profiles'>
                <section className='title'>
                    <header>Meet our Drop Bears</header>
                    <main>They won't bite, maybe?</main>
                </section>

                <section className='profileList'>
                    {this.mapProfiles(profileState.profiles)}
                </section>

                <JourneyTracker />
            </section>
        );
    };
};