const axios = require('axios');

const addJourney = (journey) => {
    return {
        type: 'SESSION_ADD_JOURNEY',
        payload: {
            journey: journey
        }
    };
};

const addUserLocation = (latitude, longitude) => {
    return {
        type: 'SESSION_ADD_USER_LOCATION',
        payload: {
            userLocation: {
                latitude: latitude,
                longitude: longitude
            }
        }
    };
};

const sendJourneys = (sessionId, journeys) => {
    return async (dispatch) => {
        dispatch({ type: 'SESSION_DELETE_JOURNEYS' });

        try {
            journeys.forEach((journey) => {
                axios({
                    url: `${buildEnv.baseURL}/journeys`,
                    method: 'POST',
                    data: {
                        ...journey,
                        sessionId: sessionId
                    }
                });
            });
        } catch (err) {
            dispatch({
                type: 'SESSION_RESTORE_JOURNEYS',
                payload: {
                    journeys: journeys
                }
            });
        }
    }
};

const sendUserLocations = (sessionId, latitude, longitude) => {
    return async (dispatch) => {
        dispatch({ type: 'SESSION_DELETE_USER_LOCATION' });

        try {
            await axios({
                url: `${buildEnv.baseURL}/sessions/${sessionId}`,
                method: 'PATCH',
                data: {
                    latitude: latitude,
                    longitude: longitude
                }
            });
        } catch (err) {
            dispatch({
                type: 'SESSION_ADD_USER_LOCATION',
                payload: {
                    userLocation: {
                        latitude: latitude,
                        longitude: longitude
                    }
                }
            });
        }
    };
};

const set = (sessionId) => {
    return {
        type: 'SESSION_SET',
        payload: {
            id: sessionId
        }
    };
};

export default {
    addJourney,
    addUserLocation,
    sendJourneys,
    sendUserLocations,
    set
};