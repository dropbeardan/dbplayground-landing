const defaultState = {
    isSet: false,
    id: null
};

const sessionReducer = (state = defaultState, action) => {

    switch (action.type) {

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