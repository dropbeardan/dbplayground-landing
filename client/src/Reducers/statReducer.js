const defaultState = {
    locations: [],
    resolutions: [],
    visitors: []
};

const statReducer = (state = defaultState, action) => {

    switch (action.type) {

        case 'STAT_SET': {
            return {
                ...state,
                ...action.payload
            };
        }

        default: {
            return state;
        }
    }
};

export default statReducer;