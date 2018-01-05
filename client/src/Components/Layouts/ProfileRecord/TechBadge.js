import React from 'react';

import { URLLabelIcon } from '../../Icons';

import './TechBadge.less';

export default class TechBadge extends React.Component {
    render() {
        return <URLLabelIcon className='TechBadge' {...this.props} />;
    };
};