import React from 'react';

import './TechIcon.less';

import { URLLabelIcon } from '../../Icons';

export default class TechIcon extends React.Component {
    render() {
        return <URLLabelIcon className='TechIcon' {...this.props} />;
    };
};