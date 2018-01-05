import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Youtube from 'react-youtube';

import './About.less';

import { GMap } from '../../Maps';
import { FullMenu } from '../../Navs';
import { ProfileCard } from '../Profiles';
import { JourneyTracker, StatLoader } from '../../Services';

@connect((store) => {
    return {
        stat: store.stat
    }
})
export default class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            revealNaniVid: false
        };

        this.generateMarkers = this.generateMarkers.bind(this);
        this.mapProfiles = this.mapProfiles.bind(this);
        this.removeNaniVidWarning = this.removeNaniVidWarning.bind(this);
    };

    componentWillMount() {
        window.scrollTo(0, 0);
    };

    generateMarkers(locations) {
        return locations.map((location) => {
            return {
                lat: location.lat,
                lng: location.lng,
                label: {
                    lat: location.lat,
                    lng: location.lng,
                    text: location.ips
                }
            };
        });
    };

    mapProfiles(profiles) {
        return profiles.map((profile, index) => {
            return (
                <ProfileCard key={index} {...profile} />
            );
        });
    };

    removeNaniVidWarning() {
        return this.setState({
            ...this.state,
            revealNaniVid: true
        });
    };

    render() {
        return (
            <section className='About'>
                <section className='title'>
                    <header>The Playground</header>
                    <main>Making sense of the sandbox.</main>
                </section>

                <main>
                    <section className='content'>
                        <section>
                            <header>Wh.. wh.. what is this!</header>
                            <main>
                                This playground was developed by Drop Bear Dan to assist with hosting and showcasing
                                the works of the Drop Bear Army.
                            </main>
                        </section>

                        <section>
                            <header>Whose army?</header>
                            <main>
                                <p>The Drop Bear Army is a collective of individuals with the Drop Bear philosophy.</p>
                                <p>
                                    These individuals from all walks of life would strengthen and unite for the eventuality
                                    of what is to come.
                                </p>
                            </main>

                            <div className='vidWrapper'>
                                <Youtube className='youtubeFrame' videoId='SiMHTK15Pik' />
                            </div>
                        </section>

                        <section>
                            <header>Huh, Drop Bears?</header>
                            <main>
                                <p>
                                    Drop Bears are a unique species of marsupials originating from the land down under.  <br />
                                    Do not fret if you do not recognise Drop Bears. <br />
                                    Stealth is a hallmark of their highly trained skills, arguably rivaling those of the shinobi.
                                </p>
                                <p>
                                    They typically prefer to stick to the cover of the sky, revealing themselves only to employ strength when necessary. <br />
                                    As a result, Drop Bears are only witnessed during a show of force.  <br />
                                    Unfortunately, this has led the development of their less than savoury reputation as as savage monsters.
                                </p>
                                <p>

                                </p>
                            </main>

                            <div className='vidWrapper'>
                                <div
                                    className={this.state.revealNaniVid ? 'warningOverlay hidden' : 'warningOverlay'}
                                    onClick={this.removeNaniVidWarning}
                                >
                                    WARNING < br />
                                    The following material may not be suitable for children.
                                </div>

                                <Youtube className='youtubeFrame' videoId='YSgpU70MZno' />
                            </div>
                        </section>
                    </section>

                    <aside className='tracking'>
                        <section className='visitors'>
                            <header>Unique Visitors</header>
                            <main>{this.props.stat.visitors.length}</main>
                        </section>

                        <section className='visitorMap'>
                            <header>From</header>
                            <main>
                                <GMap
                                    center={{ lat: -33.8651430, lng: 151.2099000 }}
                                    zoom={7}
                                    markers={this.generateMarkers(this.props.stat.locations)}
                                />
                            </main>
                        </section>
                    </aside>
                </main>

                <JourneyTracker />
                <StatLoader />
            </section>
        );
    };
};