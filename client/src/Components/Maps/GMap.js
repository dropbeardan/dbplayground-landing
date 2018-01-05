import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

import './GMap.less';

import { MapLabel, MapMarker } from './index';

const mapLabels = (labels) => {
    return labels.map((label, index) => {
        return <MapLabel key={index} {...label} />;
    });
};

const mapMarkers = (markers) => {
    return markers.map((marker, index) => {
        return <MapMarker key={index} {...marker} />;
    });
};

const InitialMap = withGoogleMap((props) => {
    return (
        <GoogleMap
            defaultCenter={props.center}
            defaultZoom={props.zoom}
        >
            {props.markers ? mapMarkers(props.markers) : null}
            {props.labels ? mapLabels(props.labels) : null}
        </GoogleMap>
    );
});

const InitialMapContainer = withScriptjs((props) => {
    return (
        <InitialMap
            {...props}
            containerElement={<div className='containerElement' />}
            mapElement={<div className='mapElement' />}
        />
    );
});

export default class GMap extends React.Component {
    render() {
        return (
            <InitialMapContainer
                {...this.props}
                googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCiKnQLca61DDXnC24g-ScLa_NJYQRAd5M&v=3.exp&libraries=geometry,drawing,places'}
                loadingElement={<div className='loadingElement' />}
            />
        );
    };
};