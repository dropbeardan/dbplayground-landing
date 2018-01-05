import React from 'react';

import './PaginationNav.less';

import { BufferOption, PageOption } from './index';

export default class PaginationNav extends React.Component {

    constructor(props) {
        super(props);

        this.condensePanels = this.condensePanels.bind(this);
        this.genPanels = this.genPanels.bind(this);
        this.mapPanels = this.mapPanels.bind(this);
    };

    condensePanels(panels, pageCount) {

        let newPanels = [...panels];

        if (newPanels[0] > 1) {
            newPanels[0] = 1;
            newPanels[1] = null;
        }

        if (newPanels[newPanels.length - 1] < pageCount) {
            newPanels[newPanels.length - 1] = pageCount;
            newPanels[newPanels.length - 2] = null;
        }

        return newPanels;
    };

    genPanels(currentPage, pageCount, panelCount) {
        let tailLength = Math.floor(panelCount / 2);

        let panelsBefore = Math.min(tailLength, currentPage - 1);
        let panelsAfter = Math.min(tailLength, pageCount - currentPage);

        let excessBefore = Math.max(tailLength - panelsAfter, 0);
        let excessAfter = Math.max(tailLength - panelsBefore, 0);

        let panels = [];

        let startPanel = Math.max(currentPage - panelsBefore - excessBefore, 1);
        let finalPanel = Math.min(currentPage + panelsAfter + excessAfter, pageCount);

        for (let i = startPanel; i <= finalPanel; i++) {
            panels.push(i);
        }

        return panels;
    };

    mapPanels(panels, currentPage, clickHandler) {
        return panels.map((panel, index) => {
            return panel ?
                <PageOption key={index} pageNumber={panel} currentPage={currentPage} onClick={clickHandler} /> :
                <BufferOption key={index} />
        });
    };

    render() {
        let panels = this.genPanels(this.props.currentPage, this.props.pageCount, this.props.panelCount);
        let condensedPanels = this.condensePanels(panels, this.props.pageCount);

        return (
            <nav className='PaginationNav'>
                {this.mapPanels(condensedPanels, this.props.currentPage, this.props.onClick)}
            </nav>
        );
    };
}