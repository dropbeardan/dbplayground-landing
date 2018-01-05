import React from 'react';

import { JourneyTracker } from '../../Services';

export default class Err404 extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                Page Not Found

                <JourneyTracker />
            </div>
        );
    };
};