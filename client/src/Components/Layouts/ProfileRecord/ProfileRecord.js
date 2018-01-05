import React from 'react';
import { connect } from 'react-redux';

import './ProfileRecord.less';

import { TechBadge } from './index';
import { ProjectCard } from '../Projects';
import { GMap } from '../../Maps';
import { JourneyTracker } from '../../Services';

@connect((store) => {
    return {
        profileState: store.profile,
        projectState: store.project
    };
})
export default class ProfileRecord extends React.Component {

    constructor(props) {
        super(props);

        this.mapTechCards = this.mapTechCards.bind(this);
        this.mapProjectPanels = this.mapProjectPanels.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    mapTechCards(technologies) {
        return technologies.map((techProps, index) => {
            return <TechBadge key={index} {...techProps} />;
        });
    }

    mapProjectPanels(profileId) {
        let projects = this.props.projectState.projects.filter((project) => {
            return project.contributors.includes(profileId);
        });

        return projects.map((project, index) => {
            return <ProjectCard key={index} project={project} profiles={this.props.profileState.profiles} />
        });
    }

    render() {
        let profile = this.props.profileState.profiles.find((profile) => {
            return profile.id == this.props.params.profileId;
        });

        return (
            <section className='ProfileRecord'>
                <section className='title'>
                    <header>{profile.alias}</header>

                    <main>
                        <span>&ldquo; {profile.quote} &rdquo;</span>
                        <span>&mdash; {profile.quoteSrc}</span>
                    </main>
                </section>

                <section className='info'>
                    <section className='imageFrame'>
                        <img src={profile.image} />
                    </section>

                    <section className='bio'>
                        <section className='name'>
                            <main>
                                <div className='heading'>Name</div>
                                <div className='value'>{profile.name}</div>

                                <div className='heading'>Also Known As</div>
                                <div className='value'>{profile.alias}</div>
                            </main>
                        </section>

                        <section className='affinity'>
                            <header>Personality</header>

                            <main>
                                <div className='heading'>Likes</div>
                                <div className='value'>{profile.likes}</div>

                                <div className='heading'>Dislikes</div>
                                <div className='value'>{profile.dislikes}</div>
                            </main>
                        </section>

                        <section className='occupation'>
                            <header>Occupation</header>

                            <main>
                                <div className='heading'>Current</div>
                                <div className='value'>{profile.currOccupation}</div>

                                <div className='heading'>Previous</div>
                                <div className='value'>{profile.prevOccupation}</div>
                            </main>
                        </section>
                    </section>

                    <section className='contact'>
                        <div>
                            <header>Contact</header>

                            <main>
                                <div className='heading'>Email</div>
                                <div className='value'>
                                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                                </div>

                                <div className='heading'>Location</div>
                                <div className='value'>{profile.location}</div>
                            </main>
                        </div>

                        <div className='mapWrapper'>
                            <GMap {...profile.mapParams} />
                        </div>
                    </section>
                </section>

                <section className='proficiencies'>
                    <header>Proficiencies</header>
                    <main>{this.mapTechCards(profile.technologies)}</main>
                </section>

                <section className='projectList'>
                    {this.mapProjectPanels(profile.id)}
                </section>

                <JourneyTracker />
            </section>
        );
    };
};