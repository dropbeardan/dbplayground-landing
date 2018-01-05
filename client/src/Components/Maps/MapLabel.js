import React from 'react';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

import './MapLabel.less';

export default class MapLabel extends React.Component {
    render() {
        return (
            <InfoBox
                defaultPosition={new google.maps.LatLng(this.props.lat, this.props.lng)}
                options={this.props.options}
            >
                <div className='label'>
                    {this.props.text}
                </div>
            </InfoBox>
        );
    };
};