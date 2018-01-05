import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { StatActions } from '../../Actions';

@connect((store) => {
    return {}
})
export default class StatLoader extends React.Component {

    constructor(props) {
        super(props);

        this.getLocations = this.getLocations.bind(this);
        this.getResolutions = this.getResolutions.bind(this);
        this.getVisitors = this.getVisitors.bind(this);
    };

    componentDidMount() {
        this.getLocations();
        this.getResolutions();
        this.getVisitors();
    };

    async getLocations() {
        try {
            let response = await axios({
                url: `${buildEnv.baseURL}/stats/locations`,
                method: 'GET'
            });

            let coordLocations = response.data.map((location) => {
                return {
                    lat: location.lat / Math.pow(10, 7),
                    lng: location.lng / Math.pow(10, 7),
                    ips: location.ips
                }
            });

            return this.props.dispatch(StatActions.set('locations', coordLocations));
        } catch (err) {
            return;
        }
    };

    async getResolutions() {
        try {
            let response = await axios({
                url: `${buildEnv.baseURL}/stats/resolutions`,
                method: 'GET'
            });

            return this.props.dispatch(StatActions.set('resolutions', response.data));
        } catch (err) {
            return;
        }
    };

    async getVisitors() {
        try {
            let response = await axios({
                url: `${buildEnv.baseURL}/stats/visitors`,
                method: 'GET'
            });

            return this.props.dispatch(StatActions.set('visitors', response.data));
        } catch (err) {
            return;
        }
    };


    render() {
        return (
            <div className='StatLoader' />
        );
    };
};