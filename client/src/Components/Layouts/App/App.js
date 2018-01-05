import React from 'react';

import './App.less';

import { NavMenu } from '../../Navs';
import { SessionTracker, StatLoader } from '../../Services';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='App'>
                {location.pathname == '/' ? null : <NavMenu />}
                {this.props.children}
                <SessionTracker />
                <StatLoader />
            </div>
        );
    };
}