const defaultState = {
    isSet: false,
    id: null,
    journeys: [],
    userLocation: null
};

const sessionReducer = (state = defaultState, action) => {

    switch (action.type) {

        case 'SESSION_ADD_JOURNEY': {
            return {
                ...state,
                journeys: [...state.journeys, action.payload.journey]
            };
        }

        case 'SESSION_DELETE_JOURNEYS': {
            return {
                ...state,
                journeys: []
            };
        }

        case 'SESSION_RESTORE_JOURNEYS': {
            return {
                ...state,
                journeys: [...state.journeys, ...action.payload.journeys]
            };
        }

        case 'SESSION_ADD_USER_LOCATION': {
            return {
                ...state,
                userLocation: action.payload.userLocation
            };
        }

        case 'SESSION_DELETE_USER_LOCATION': {
            return {
                ...state,
                userLocation: null
            };
        }

        case 'SESSION_SET': {
            return {
                ...state,
                isSet: true,
                id: action.payload.id
            };
        }

        default: {
            return state;
        }
    }
};

export default sessionReducer;