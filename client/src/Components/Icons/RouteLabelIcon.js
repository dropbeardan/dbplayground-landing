import React from 'react';

import './LabelIcon.less';

export default class RouteLabelIcon extends React.Component {
    render() {

        return (
            <Link className={`LabelIcon ${this.props.className}`} to={this.props.route}>
                <img src={this.props.src} title={this.props.title} />
                <header>{this.props.title}</header>
            </Link>
        );
    };
};