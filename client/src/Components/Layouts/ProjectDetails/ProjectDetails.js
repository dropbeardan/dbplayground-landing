import React from 'react';
import { connect } from 'react-redux';

import './ProjectDetails.less';

import { JourneyTracker } from '../../Services';

@connect((store) => {
    return {
        projectState: store.project
    };
})
export default class ProjectDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu: null
        };

        this.changeActiveMenu = this.changeActiveMenu.bind(this);
        this.mapDetails = this.mapDetails.bind(this);
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    changeActiveMenu(menu) {
        return this.setState({
            ...this.state,
            activeMenu: menu
        });
    };

    mapDetails(details, activeDetail) {
        return details.map((detail) => {
            return (
                <div
                    key={detail.name}
                    className={activeDetail == detail.name ? 'active' : ''}
                    onClick={() => { return activeDetail == detail.name ? null : this.changeActiveMenu(detail.name); }}
                >
                    {detail.name}
                </div>
            );
        });
    };

    render() {
        let projectState = this.props.projectState;

        let project = projectState.projects.find((project) => {
            return project.id == this.props.params.projectId;
        });

        let activeDetail = project.details.find((detail) => {
            return !this.state.activeMenu || detail.name == this.state.activeMenu;
        });

        return (
            <section className='ProjectDetails'>
                <section className='title'>
                    <header>{project.title}</header>
                </section>

                <iframe className='solution' src={project.solution} />

                <section className='menu'>
                    {this.mapDetails(project.details, activeDetail.name)}
                </section>

                <iframe className='details' src={activeDetail.src} />

                <JourneyTracker />
            </section >
        );
    };
};