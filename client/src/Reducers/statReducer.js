const defaultState = {
    locations: [],
    resolutions: [],
    visitors: []
};

const statReducer = (state = defaultState, action) => {

    switch (action.type) {

        case 'STAT_SET': {
            let payload = {};

            Object.keys(action.payload).forEach((key) => {
                payload = {
                    ...payload,
                    [key]: action.payload[key]
                };
            });

            return {
                ...state,
                ...payload
            };
        }

        default: {
            return state;
        }
    }
};

export default statReducer;