import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './Projects.less';

import { ProjectCard } from './index';
import { PaginationNav } from '../../Navs';
import { JourneyTracker } from '../../Services';

@connect((store) => {
    return {
        profileState: store.profile,
        projectState: store.project
    };
})
export default class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            projectsPerPage: 20,
            panelCount: 7
        };

        this.mapProjects = this.mapProjects.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    mapProjects(projects, currentPage, projectsPerPage) {
        let startIndex = (currentPage - 1) * projectsPerPage;
        let endIndex = currentPage * projectsPerPage;

        let visibleProjects = projects.slice(startIndex, endIndex);

        return visibleProjects.map((project, index) => {
            return <ProjectCard key={index} project={project} profiles={this.props.profileState.profiles} />;
        });
    }

    changePage(page) {
        this.setState({
            ...this.state,
            currentPage: page
        });

        window.scrollTo(0, 0);
    }

    render() {
        let projectState = this.props.projectState;

        let emptyDisplay = (<header>Check again Soon for some cool stuff!</header>);

        let paginationNav = (
            <PaginationNav
                currentPage={this.state.currentPage}
                pageCount={Math.ceil(projectState.projects.length / this.state.projectsPerPage)}
                panelCount={this.state.panelCount}
                onClick={this.changePage}
            />
        );

        return (
            <section className='Projects'>
                <section className='title'>
                    <header>Drop Bear Projects</header>
                    <main>Raising our power levels over 9000!</main>
                </section>

                <section className='projectList'>
                    {!projectState.projects || projectState.projects.length == 0 ? emptyDisplay : null}

                    <main>
                        {this.mapProjects(projectState.projects, this.state.currentPage, this.state.projectsPerPage)}
                    </main>
                </section>

                {!projectState.projects || projectState.projects.length == 0 ? null : paginationNav}

                <JourneyTracker />
            </section>
        );
    };
};