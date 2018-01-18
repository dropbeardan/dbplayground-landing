import React from 'react';
import { connect } from 'react-redux';

import './ProjectPortal.less';

import { JourneyTracker } from '../../Services';

@connect((store) => {
    return {
        projectState: store.project
    };
})
export default class ProjectPortal extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        let projectState = this.props.projectState;

        let project = projectState.projects.find((project) => {
            return project.id == this.props.params.projectId;
        });

        return (
            <section className='ProjectPortal'>
                <section className='title'>
                    <header>{project.title}</header>
                </section>

                <iframe className='solution' src={project.url} />

                <JourneyTracker />
            </section >
        );
    };
};