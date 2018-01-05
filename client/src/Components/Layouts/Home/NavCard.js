import React from 'react';
import { Link } from 'react-router';

import './NavCard.less';

import { SlideCard } from '../../Cards';

export default class NavCard extends React.Component {

    render() {
        let front = (
            <section>
                <img src={this.props.frontSrc} />
                <div>
                    <header>{this.props.title}</header>
                </div>
            </section>
        );

        let back = (
            <section>
                <img src={this.props.backImage} />
                <div>
                    <header>{this.props.title}</header>
                    <main>{this.props.description}</main>
                </div>
            </section>
        );

        return (
            <Link className='NavCard' to={this.props.route}>
                <SlideCard front={front} back={back} />
            </Link >
        );
    };
};