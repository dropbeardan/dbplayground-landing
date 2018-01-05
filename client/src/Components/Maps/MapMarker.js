import React from 'react';
import { Marker } from 'react-google-maps';

import { MapLabel } from './index';

export default class MapMarker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.hideLabel = this.hideLabel.bind(this);
        this.showLabel = this.showLabel.bind(this);
    };

    hideLabel() {
        return this.setState({
            ...this.state,
            isOpen: false
        });
    };

    showLabel() {
        return this.setState({
            ...this.state,
            isOpen: true
        });
    };

    render() {
        return (
            <Marker
                position={{ lat: this.props.lat, lng: this.props.lng }}
                onMouseOver={this.showLabel}
                onMouseOut={this.hideLabel}
            >
                {
                    this.props.label && this.state.isOpen ?
                        <MapLabel {...this.props.label} onCloseClick={this.toggleLabel} options={{ closeBoxURL: '' }} /> :
                        null
                }
            </Marker>
        );
    };
};