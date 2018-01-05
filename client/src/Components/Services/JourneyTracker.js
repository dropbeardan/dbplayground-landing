import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import { SessionActions } from '../../Actions';

@connect((store) => {
    return {
        session: store.session
    }
})
export default class JourneyTracker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null
        };

        this.finishJourney = this.finishJourney.bind(this);
        this.startJourney = this.startJourney.bind(this);
    };

    componentDidMount() {
        if (this.props.session.id) {
            return this.startJourney(this.props.session.id, location.pathname);
        }

        return this.props.dispatch(SessionActions.addJourney({
            active: false,
            path: location.pathname,
            startTime: moment(),
            endTime: moment()
        }));
    };

    componentWillUnmount() {
        if (this.state.id) {
            return this.finishJourney(this.state.id);
        }
    };

    async finishJourney(journeyId) {
        try {
            let response = await axios({
                url: `${buildEnv.baseURL}/journeys/${journeyId}`,
                method: 'POST'
            });
        } catch (err) {
            return;
        }
    };

    async startJourney(sessionId, path) {
        try {
            let response = await axios({
                url: `${buildEnv.baseURL}/journeys`,
                method: 'POST',
                data: {
                    sessionId: sessionId,
                    path: path
                }
            });

            return this.setState({
                ...this.state,
                id: response.data.id
            });
        } catch (err) {
            return;
        }
    };

    render() {
        return (
            <div className='JourneyTracker' />
        );
    };
};