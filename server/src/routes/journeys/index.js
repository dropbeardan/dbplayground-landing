const journeys = require('express').Router({ mergeParams: true });

const createJourney = require('./createJourney');
const finishJourney = require('./finishJourney');

journeys.route('/:journeyId')
    .post(finishJourney)
    .all((req, res, next) => {
        return next();
    });

journeys.route('/')
    .post(createJourney)
    .all((req, res, next) => {
        return next();
    });

module.exports = journeys;