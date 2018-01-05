import React from 'react';

import './PageOption.less'

export default class PageOption extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div
                className={this.props.currentPage == this.props.pageNumber ? 'PageOption active' : 'PageOption'}
                onClick={() => { return this.props.currentPage == this.props.pageNumber ? null : this.props.onClick(pageNumber) }}
            >
                {this.props.pageNumber}
            </div>
        );
    };
};