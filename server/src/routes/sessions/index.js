const sessions = require('express').Router();

const createSession = require('./createSession');
const getSession = require('./getSession');

sessions.route('/:sessionId')
    .get(getSession)
    .all((req, res, next) => {
        return next();
    });

sessions.route('/')
    .post(createSession)
    .all((req, res, next) => {
        return next();
    });

module.exports = sessions;