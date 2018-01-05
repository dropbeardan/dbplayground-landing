const set = (sessionId) => {
    return {
        type: 'SESSION_SET',
        payload: {
            id: sessionId
        }
    };
};

export default {
    set
};