import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import { SessionActions } from '../../Actions';

@connect((store) => {
    return {
        session: store.session
    };
})
export default class SessionTracker extends React.Component {

    constructor(props) {
        super(props);

        this.journeyListener = this.journeyListener;
        this.locationListener = this.locationListener;

        this.getSession = this.getSession.bind(this);
        this.removeListeners = this.removeListeners.bind(this);
        this.sendJourneys = this.sendJourneys.bind(this);
        this.sendUserLocation = this.sendUserLocation.bind(this);
        this.updateSession = this.updateSession.bind(this);
        this.updateUserLocation = this.updateUserLocation.bind(this);
    };

    componentWillMount() {
        this.updateUserLocation();
        this.updateSession();
    };

    componentDidMount() {
        this.journeyListener = setTimeout(this.sendJourneys, 10000);
        this.locationListener = setTimeout(this.sendUserLocation, 10000);

        window.addEventListener('beforeunload', this.removeListeners);
    }

    componentWillUnmount() {
        this.removeListeners();

        window.removeEventListener('beforeunload', this.removeListeners);
    }

    async getSession() {
        try {
            let response = await axios({
                url: `${buildEnv.baseURL}/sessions`,
                method: 'POST',
                data: {
                    deviceHeight: screen.height,
                    deviceWidth: screen.width,
                    screenHeight: window.innerHeight,
                    screenWidth: window.innerWidth
                }
            });

            return response.data.id;
        } catch (err) {
            return null;
        }
    };

    removeListeners() {
        clearTimeout(this.journeyListener);
        clearTimeout(this.locationListener);

        this.journeyListener = null;
        this.locationListener = null;
    };

    sendJourneys() {
        if (this.props.session.id && this.props.session.journeys.length > 0) {
            this.props.dispatch(SessionActions.sendJourneys(
                this.props.session.id,
                this.props.session.journeys
            ));
        }
    };

    sendUserLocation() {
        if (this.props.session.id && this.props.session.userLocation) {
            this.props.dispatch(SessionActions.sendUserLocations(
                this.props.session.id,
                this.props.session.userLocation.latitude,
                this.props.session.userLocation.longitude
            ));
        }
    };

    async updateSession() {
        // HTML localstorage not enabled.
        if (!Storage) {
            let sessionId = await this.getSession();

            return this.props.dispatch(SessionActions.set(sessionId));
        }

        let sessionCache = localStorage.getItem('dbplayground');

        // Invalid or expired Session cache.
        if (
            !sessionCache ||
            !JSON.parse(sessionCache).id ||
            !JSON.parse(sessionCache).created ||
            moment(JSON.parse(sessionCache).created).isBefore(moment().subtract(30, 'minutes'))
        ) {
            let sessionId = await this.getSession();

            localStorage.setItem('dbplayground', JSON.stringify({
                id: sessionId,
                created: moment()
            }));

            return this.props.dispatch(SessionActions.set(sessionId));
        }

        // Valid Session cache.
        localStorage.setItem('dbplayground', JSON.stringify({
            id: JSON.parse(sessionCache).id,
            created: moment()
        }));

        return this.props.dispatch(SessionActions.set(JSON.parse(sessionCache).id));
    };

    async updateUserLocation() {
        let userLocation = await new Promise((resolve, reject) => {
            return navigator.geolocation.getCurrentPosition(
                (location) => { resolve(location.coords); },
                (error) => { resolve(null); },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 30000
                }
            );
        });

        if (userLocation) {
            this.props.dispatch(SessionActions.addUserLocation(
                Math.round(userLocation.latitude * Math.pow(10, 7)),
                Math.round(userLocation.longitude * Math.pow(10, 7))
            ));
        }
    };

    render() {
        return (
            <div className='SessionTracker' />
        );
    };
};