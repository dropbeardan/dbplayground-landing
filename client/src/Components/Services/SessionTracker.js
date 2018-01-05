import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import { SessionActions } from '../../Actions';

@connect((store) => {
    return {};
})
export default class SessionTracker extends React.Component {

    constructor(props) {
        super(props);

        this.getSession = this.getSession.bind(this);
        this.getUserLocation = this.getUserLocation.bind(this);
        this.updateSession = this.updateSession.bind(this);
    };

    componentWillMount() {
        return this.updateSession();
    }

    async getSession(position) {
        try {
            let response = await axios({
                url: `${buildEnv.baseURL}/sessions`,
                method: 'POST',
                data: {
                    latitude: position.latitude ? Math.round(position.latitude * Math.pow(10, 7)) : null,
                    longitude: position.longitude ? Math.round(position.longitude * Math.pow(10, 7)) : null,
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
    }

    async getUserLocation() {
        return new Promise((resolve, reject) => {
            return navigator.geolocation.getCurrentPosition(
                (location) => { resolve(location.coords); },
                (error) => { resolve({}); },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 30000
                }
            );
        });
    }

    async updateSession() {
        let userLocation = await this.getUserLocation();

        // HTML localstorage not enabled.
        if (!Storage) {
            let sessionId = await this.getSession(userLocation);

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
            let sessionId = await this.getSession(userLocation);

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
    }

    render() {
        return (
            <div className='SessionTracker' />
        );
    };
};