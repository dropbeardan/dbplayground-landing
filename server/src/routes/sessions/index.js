const sessions = require('express').Router();

const createSession = require('./createSession');
const getSession = require('./getSession');
const setLocation = require('./setLocation');

sessions.route('/:sessionId')
    .get(getSession)
    .patch(setLocation)
    .all((req, res, next) => {
        return next();
    });

sessions.route('/')
    .post(createSession)
    .all((req, res, next) => {
        return next();
    });

module.exports = sessions;