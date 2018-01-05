import React from 'react';
import { Link } from 'react-router';

import './ProjectCard.less';

import { PreviewCard } from '../../Cards';

export default class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        let project = this.props.project;
        let profiles = this.props.profiles;

        let contributors = project.contributors.map((contributorId) => {
            let profile = profiles.find((profile) => {
                return profile.id == contributorId;
            });

            return profile.alias;
        });

        let iconStrip = project.techIcons.map((icon, index) => {
            return (
                <img key={index} src={icon.src} title={icon.title} />
            );
        });

        let content = (
            <div className='content'>
                <p>By <b>{contributors.join(', ')}</b></p>
                <p className='description'>{project.summary}</p>
            </div>
        );

        let strip = (
            <div className='iconStrip'>
                {iconStrip}
            </div>
        );

        return (
            <Link className='ProjectCard' to={`/projects/${project.id}`}>
                <PreviewCard
                    image={project.image}
                    heading={project.title}
                    content={content}
                    strip={strip}
                />
            </Link>
        );
    };
};