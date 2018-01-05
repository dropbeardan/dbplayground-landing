import React from 'react';
import { Link } from 'react-router';

import './LabelIcon.less';

export default class URLLabelIcon extends React.Component {
    render() {

        return (
            <a className={`LabelIcon ${this.props.className}`} href={this.props.url} target='_blank'>
                <img src={this.props.src} label={this.props.title} />
                <header>{this.props.title}</header>
            </a>
        );
    };
};