import React from 'react';
import { Link } from 'react-router';

import './ProfileCard.less';

import { FlipCard } from '../../Cards';

export default class ProfileCard extends React.Component {
    render() {
        let techIcons = this.props.techIcons.map((icon, index) => {
            return <img key={index} src={icon.src} title={icon.title} />;
        });

        let front = (
            <section className='front'>
                <div className='imgWrapper'>
                    <img src={this.props.image} />
                </div>

                <header>{this.props.alias}</header>
            </section>
        );

        let back = (
            <section className='back'>
                <header>{this.props.name}</header>

                <main>
                    <div>
                        <span>&ldquo;</span>
                        <span>{this.props.quote}</span>
                        <span>&rdquo;</span>
                    </div>

                    <div>
                        &mdash; {this.props.quoteSrc}
                    </div>
                </main>

                <aside>
                    {techIcons}
                </aside>
            </section>
        );

        return (
            <Link className='ProfileCard' to={`/profiles/${this.props.id}`}>
                <FlipCard
                    front={front}
                    back={back}
                />
            </Link >
        );
    };
};