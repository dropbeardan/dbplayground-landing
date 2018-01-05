const set = (name, values) => {
    return {
        type: 'STAT_SET',
        payload: {
            [name]: values
        }
    };
};

export default {
    set
};